const e = React.createElement;

class LikeButton extends React.Component {

  state = {
    text: '',
    messages: [],
  }

  componentDidMount() {
    // socket.on("newMessage", data => this.setState({ messages: `${data.from} - ${data.text} ` }));

    socket.on("newMessage", data => this.setState(prevState => {
      return {
        messages: [...prevState.messages, {from:data.from, text:data.text}]
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

  render() {

    return (
      <div>
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

        <ul>
          {this.state.messages.map(({ from, text }, i) =>
            <li key={i}>{from} – {text}</li>
          )}
        </ul>

      </div>
    );
  }
}



const domContainer = document.querySelector('#react_form');
ReactDOM.render(e(LikeButton), domContainer);