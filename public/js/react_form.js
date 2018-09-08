const e = React.createElement;

class LikeButton extends React.Component {

  state = {
    text: '',
    messages: [],
  }

  componentDidMount() {
    // socket.on("newMessage", data => this.setState({ messages: `${data.from} - ${data.text} ` }));

    // socket.on("newMessage", data => this.setState(prevState => {
    //   return {
    //     messages: [...prevState.messages, { from: data.from, text: data.text }]
    //   }
    // }));

    socket.on("newMessage", data => this.setState({
      messages: this.state.messages.concat({ from: data.from, text: data.text })
    }));    

    socket.on("newLocationMessage", data => this.setState(prevState => {
      return {
        messages: [...prevState.messages, { from: data.from, url: data.url, urlText: "My current location" }]
      }
    }));
    
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSendClick = (e) => {
    e.preventDefault();

    socket.emit('createMessage', {
      from: 'User',
      text: this.state.text,
    }, function () {

    })
  }

  handleSendLocationClick = (e) => {
    if (!navigator.geolocation) {
      return alert('Geolocation not supported by browser.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      socket.emit('createLocationMessage', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }, () => {
      alert('Unable to fetch location.')
    })

  }

  render() {

    return (
      <div>
        <form id="message-form">
          <input
            name="message"
            type="text"
            placeholder="Message"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button
            onClick={this.handleSendClick}
          >
            Send
          </button>
        </form>


        <ul>
          {this.state.messages.map(({ from, text, url,urlText }, i) =>
            <li key={i}>{from}: {text}<a target="_blank" href={url}>{urlText}</a></li>
          )}
        </ul> 
        
        <button id="send-location" onClick={this.handleSendLocationClick}>Send Location</button>

      </div>
    );
  }
}



const domContainer = document.querySelector('#react_form');
ReactDOM.render(e(LikeButton), domContainer);