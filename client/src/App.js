import React, { Component } from 'react';
import logo from './logo.svg';

import {ChatRoom} from './ChatRoom'; 

// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


class App extends React.Component {

  render() {
    const chatAppStyle = {
      width: "100%",
      height: "100%",
      background: "white",
      position: "absolute",
    };

    return (
      <div style={chatAppStyle}>
        <ChatRoom />
      </div>
    );
  }
}






export default App;
