import React, { Component } from 'react'; 

import {ChatLine} from './ChatLine';
 

export class ChatContent extends React.Component {
  render() {
    const chatContentStyle = {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      overflowY: "scroll",
      overflowX: "hidden",
      borderRight: "1px solid #DAD8DE",
    }

    const chatLines = this.props.chatLines.map(cl => 
      <ChatLine
        messageObject={cl}
        key={cl.id}
        smiles={this.props.smiles}
        smilesNames={this.props.smilesNames}
      />
    )

    return (
      <div style={chatContentStyle}>
        {chatLines}
      </div>
    );
  }
}