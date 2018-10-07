import React, { Component } from 'react';

export class EmoteBox extends React.Component {
  state = {
    hover: false,
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  handleClick = () => {
    this.props.onEmoteClick(this.props.label)
  }


  render() {
    let styleHover = this.state.hover ? { background: "rgba(125,91,190,.2)" } : {};

    const emoteBoxStyle = {
      position: "relative",
      height: "40px",
      width: "40px",
      border: 0,
      cursor: "pointer",
      padding: 0,
      background: "white",
    }

    const emoteBoxContentStyle = {
      backgroundImage: `url('./emotes/${this.props.fileName}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      height: "100%",
      width: "100%",
    }

    return (
      <button
        style={{ ...emoteBoxStyle, ...styleHover }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={this.handleClick}
      >
        <div style={emoteBoxContentStyle}>

        </div>
      </button>
    );
  }
}
