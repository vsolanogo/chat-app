import React, { Component } from 'react';

export class TextAreaBox extends React.Component {
  state = {
    focus: false,
    text: "",
  }

  handleTextAreaFocus = () => {
    this.setState({ focus: true })
  }

  handleTextAreaBlur = () => {
    this.setState({ focus: false })
  }


  render() {
    let focusStyle = {};

    if (this.state.focus) {
      focusStyle = {
        boxShadow: "0 0 6px -2px #7d5bbe",
        borderColor: "#7d5bbe",
      }
    }

    const textAreaBoxStyle = {
      postiion: "absolute",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      resize: "none",
      borderRadius: 2,
      borderColor: "rgb(218,216,222)",
    };

    return (
      <textarea
        style={{ ...textAreaBoxStyle, ...focusStyle, ...this.props.style }}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value}
        onFocus={this.handleTextAreaFocus}
        onBlur={this.handleTextAreaBlur}
      />
    )
  }
}
