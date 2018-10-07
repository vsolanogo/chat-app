import React, { Component } from 'react'; 
import uuid from 'uuid';

 

export class ChatLine extends React.Component {
  state = {
    messageAndSmiles: [],
    splittedMessage: [],
  }

  componentDidMount() {
    const splittedM = this.props.messageObject.text.split(' ').filter(x => x.length > 0);

    this.setState({
      splittedMessage: splittedM,
    })
  }

  render() {
    const chatLineStyle = {
      paddingLeft: 20,
      paddingTop: 5,
      paddingRight: 20,
      paddingBottom: 5,
    }

    const textStyle = {
      fontFamily: "Arial",
      fontSize: 12,
      boxSizing: "border-box",
      wordBreak: "break-all",
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",

    }


    const message = this.state.splittedMessage.map(x => {
      if (this.props.smilesNames.includes(x)) {
        const imageObj = this.props.smiles.find(obj => obj.label.includes(x))
        return <span style={textStyle} key={uuid.v4()}><img src={`/emotes/${imageObj.fileName}`} /><span style={textStyle}> </span></span>
      }
      else {
        return <span style={textStyle} key={uuid.v4()}>{x} </span>
      }

    });

    return (
      <div style={chatLineStyle}>
        <span style={textStyle}><b>{this.props.messageObject.user}: </b></span>{message}
      </div>
    );

  }
}