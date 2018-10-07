import React, { Component } from 'react'; 



import {ChatButton} from './ChatButton';
import {OpenEmotePickerButton} from './OpenEmotePickerButton';
import {EmotePickerBox} from './EmotePickerBox';
import {TextAreaBox} from './TextAreaBox';

export class InputBlock extends React.Component {
  state = {
    message: "",
    displayEmotePicker: false,
  }

  handleEmoteClick = (label) => {
    let space = "";

    if (this.state.message.length &&
      this.state.message[this.state.message.length - 1] !== " ") {
      space = " ";
    }

    this.setState(prevState => {
      return {
        message: prevState.message.concat(`${space}${label} `)
      }
    })
  }

  handleChatClick = () => {
    if (this.state.message.length > 0) {
      this.props.onChatClick(this.state.message);
    }

    this.setState({ message: "" })
  }

  handleOpenEmotePickerButtonClick = () => {
    this.showEmotePicker();
  }

  showEmotePicker = () => {
    this.setState({ displayEmotePicker: !this.state.displayEmotePicker })
  }

  handleMessageChange = (e) => {
    this.renewMessage(e)
  }

  renewMessage = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {

    const inputBlockStyle = {
      display: "flex",
      flexShrink: 0,
      background: "#EFEEF1",
      borderRight: "1px solid #DAD8DE",
      flexBasis: 110,
    };

    const inputWrapper = {
      width: "100%",
      marginLeft: 20,
      marginBottom: 20,
      marginRight: 20,
      position: "relative",
    }


    return (
      <div style={inputBlockStyle}>
        <div style={inputWrapper}>
          <TextAreaBox
            onChange={this.handleMessageChange}
            value={this.state.message}
            style={{ paddingRight: 35, height: 50 }}
            placeholder={"Send a message"}
          />
          <OpenEmotePickerButton
            onOpenEmotePickerButtonClick={this.handleOpenEmotePickerButtonClick}
          />

          <ChatButton
            onChatClick={this.handleChatClick}
          />

          {this.state.displayEmotePicker &&
            <EmotePickerBox
              smiles={this.props.smiles}
              onEmoteClick={this.handleEmoteClick}
            />
          }

        </div>
      </div>
    );
  }
}