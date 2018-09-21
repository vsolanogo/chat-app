const e = React.createElement;

class ChatApp extends React.Component {

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


class ChatRoom extends React.Component {
  state = {
    chatLines: [
      {
        user: "user",
        text: "text1 text1text1text1 text1 text1 text1text1 text1text1 text1text1text1 text1",
      },
      {
        user: "user",
        text: "text2",
      },
      {
        user: "user",
        text: "text3",
      },
      {
        user: "user",
        text: "text4",
      },
    ],
    smiles: new Array(),
  }


  componentDidMount() {
    const smilesArr = new Array();
    const smilesName = [":)", ":(", ":D", ">(", ":|", "O_o",
      "B)", ":O", "<3", ":/", ";)", ":P",
      ";P", "R)", "JKanStyle", "OptimizePrime", "StoneLightning", "TheRinger",
      "RedCoat", "Kappa", "JonCarnage", "MrDestructoid", "BCWarrior", "GingerPower",
      "DansGame", "SwiftRage", "PJSalt", "KevinTurtle", "Kreygasm", "SSSsss",
      "PunchTrees", "FunRun", "ArsonNoSexy", "SMOrc", "FrankerZ", "OneHand", "HassanChop", "BloodTrail", "DBstyle",
      "AsianGlow", "BibleThump", "ShazBotstix", "PogChamp", "PMSTwin", "FUNgineer", "ResidentSleeper", "4Head",
      "HotPokket", "FailFish", "DAESuppy", "WholeWheat", "ThunBeast", "TF2John", "RalpherZ", "Kippa", "Keppo",
      "BigBrother", "SoBayed", "PeoplesChamp", "GrammarKing", "PannicVis", "ANELE", "BrokeBack", "PipeHype",
      "YouWHY", "RitzMitz", "EleGiggle", "TheThing", "HassaanChop", "BabyRage", "panicBasket", "PermaSmug",
      "BuddhaBar", "WutFace", "PRChasee", "Mau5", "HeyGuys", "NotATK", "mcaT", "TTours", "PraiseIt", "HumbleLife",
      "CorgiDerp", "ArgieB8", "ShadyLulu", "KappaPride", "CoolCat", "DendiFace", "NotLikeThis", "riPepperonis",
      "duDudu", "bleedPurple", "twitchRaid", "SeemsGood", "MingLee", "KappaRoss",
      "KappaClaus", "OhMyDog", "OSFrog", "SeriousSloth", "KomodoHype", "VoHiYo",
      "MikeHogu", "KappaWealth", "cmonBruh", "SmoocherZ", "NomNom", "StinkyCheese",
      "ChefFrank", "FutureMan", "OpieOP", "DoritosChip", "PJSugar", "VoteYea",
      "VoteNay", "RuleFive", "DxCat", "DrinkPurple", "TinyFace", "PicoMause",
      "TheTarFu", "DatSheffy", "UnSane", "copyThis", "pastaThat", "imGlitch",
      "GivePLZ", "TakeNRG", "BlargNaut", "DogFace", "Jebaited", "TooSpicy",
      "WTRuck", "UncleNox", "RaccAttack", "StrawBeary", "PrimeMe", "BrainSlug",
      "BatChest", "CurseLit", "Pooooound", "FreakinStinkin", "SuperVinlin", "TriHard",
      "CoolStoryBob", "ItsBoshyTime", "KAPOW", "YouDontSay", "UWot", "RlyTho",
      "SoonerLater", "PartyTime", "NinjaGrumpy", "MVGame", "TBAngel", "TheIlluminati",
      "BlessRNG", "MorphinTime", "ThankEgg", "ArigatoNas", "BegWan", "BigPhish",
      "InuyoFace", "Kappu", "KonCha", "PunOko", "SabaPing", "TearGlove",
      "TehePelo", "TwitchLit", "CarlSmile", "CrreamAwk", "Squid1", "Squid2",
      "Squid3", "Squid4", "TwitchUnity", "TPcrunchyroll", "EntropyWins", "LUL",
      "PowerUpR", "PowerUpL", "HSCheers", "HSWP", "DarkMode", "TwitchVotes",
      "TPFufun", "RedTeam", "GreenTeam", "HappyJack", "AngryJack", "PurpleStar",
      "FBtouchdown", "PopCorn", "TombRaid", "EarthDay", "PartyHat", "MercyWing1",
      "MercyWing2", "PinkMercy", "BisexualPride", "LesbianPride", "GayPride", "TransgenderPride",
      "AsexualPride", "PansexualPride", "TwitchRPG", "IntersexPride", "MaxLOL", "NonBinaryPride",
      "GenderFluidPride", "SnickersGoal", "SnickersBoom",
    ]

    for (let i = 0; i < 213; i++) {
      smilesArr.push(this.createImageObj(`${i + 1}.png`, smilesName[i]));
    }

    this.setState({
      smiles: smilesArr,
    })
  }

  createImageObj = (fileName, label) => {
    return Object.assign({}, {
      fileName, label
    })
  }

  handleSendMessage = (p) => {
    this.sendNewMessage(p)
  }

  sendNewMessage = (p) => {
    const l = { text: p }
    this.setState({
      chatLines: this.state.chatLines.concat(l)
    })
  }

  render() {
    const chatRoomStyle = {
      width: 340,
      background: "#EFEEF1",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    };

    return (
      <div style={chatRoomStyle}>
        <ChatContent
          chatLines={this.state.chatLines}
          smiles={this.state.smiles}
        />
        <InputBlock
          onChatClick={this.handleSendMessage}
          smiles={this.state.smiles}
        />

      </div>
    );
  }
}

class ChatContent extends React.Component {
  render() {
    const chatContentStyle = {
      display: "flex",
      flexGrow: 2,
      flexDirection: "column",
      alignItems: "flex-start",
      overflow: "scroll",
      borderRight: "1px solid #DAD8DE",
    }

    const chatLines = this.props.chatLines.map(cl =>
      <ChatLine
        text={cl.text}
      />
    )

    return (
      <div style={chatContentStyle}>
        {chatLines}
      </div>
    );
  }
}

class ChatLine extends React.Component {
  state = {
    text: this.props.text,
  }

  render() {
    const chatLineStyle = {
      display: "flex",
      width: "100%",
      flexShrink: 0,
      paddingLeft: 20,
      paddingTop: 5,
      paddingRight: 20,
      paddingBottom: 5,
      boxSizing: "border-box",
    }

    const textStyle = {
      fontFamily: "Arial",
      fontSize: 12,
    }

    return (
      <div style={chatLineStyle}>
        <span style={textStyle}>{this.props.text}</span>
      </div>
    );
  }
}


class InputBlock extends React.Component {
  state = {
    message: "",
    displayEmotePicker: false,
  }

  handleEmoteClick = (label) => {
    let space = "";
    
    if(this.state.message.length && 
      this.state.message[this.state.message.length-1]!==" "){
        space =" ";
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

    console.log(e.target.value)//
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

          {/* <EmotePickerBox
            display={this.state.displayEmotePicker}
            smiles={this.props.smiles}
          /> */}

        </div>
      </div>
    );
  }
}


class TextAreaBox extends React.Component {
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


class EmotePickerBox extends React.Component {
  state = {
    smilesFilter: "",
    filteredSmiles: this.props.smiles,
  }

  shouldComponentUpdate(newProps, newState) {
    return newState.smilesFilter !== this.state.smilesFilter ||
      newProps.display !== this.props.display;
  }

  handleFilterChange = (e) => {
    this.setState({
      smilesFilter: e.target.value,
      filteredSmiles: this.props.smiles.filter(t => t.label.toLowerCase().includes(e.target.value.toLowerCase())),
    });
  }

  render() {
    const emotePickerBoxWrapperStyle = {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      bottom: 120,
      width: 300,
      border: "1px solid #DAD8DE",
      boxShadow: "0 2px 4px -1px rgba(0,0,0,.1)",
      display: "flex",
      // zIndex: this.props.display ? 1 : -1,
      flexDirection: "column",
    }

    const emotePickerBoxStyle = {
      display: "flex",
      maxHeight: 305,
      overflow: "scroll",
      background: "white",
      // gridTemplateColumns: "repeat(6, 1fr)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "20px",
      boxSizing: "border-box",
    }

    const smileFinderBox = {
      display: "flex",
      flexShrink: 0,
      background: "white",
      borderTop: "1px solid #DAD8DE",
      flexBasis: 50,
      padding: 10,
      boxSizing: "border-box",
    }

    return (
      <div style={emotePickerBoxWrapperStyle}>
        <div style={emotePickerBoxStyle}>
          {
            this.state.filteredSmiles.map(x =>
              <EmoteBox
                fileName={x.fileName}
                label={x.label}
                onEmoteClick={this.props.onEmoteClick}
              />
            )
          }
        </div>
        <div style={smileFinderBox}>
          <TextAreaBox
            onChange={this.handleFilterChange}
            value={this.state.smilesFilter}
            placeholder="Search for Emotes"
            style={{ height: 30 }}
          />
        </div>
      </div>
    );
  }
}

class EmoteBox extends React.Component { //emotebuttonbox
  state = {
    hover: false,
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  handleClick = () =>{
    this.props.onEmoteClick(this.props.label)
  }


  render() {
    let styleHover = this.state.hover ? { background: "rgba(125,91,190,.2)" } : {};

    const emoteBoxStyle = {
      position: "relative",
      height: "38px",
      width: "38px",
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


class OpenEmotePickerButton extends React.Component {
  state = {
    hover: false,
    active: false,
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  handleButtonFocus = () => {

    this.setState({ active: true })
  }

  handleButtonBlur = () => {
    this.setState({ active: false })
  }

  handleButtonClick = () => {
    this.props.onOpenEmotePickerButtonClick();
  }

  render() {
    let styleHover = {}, styleActive = {};

    if (this.state.hover) {
      styleHover = {
        background: "rgba(100,65,164,.05)",
        color: "#2c2541",
      }
    }

    if (this.state.active) {
      styleActive = {
        background: "transparent",
        borderColor: "rgba(100,65,164,.6)",
        boxShadow: "0 0 6px 0 #7d5bbe",
        color: "#2c2541",
      }
    }

    const openEmotePickerButtonStyle = {
      background: "transparent",
      border: "1px solid",
      borderRadius: 2,
      borderColor: "transparent",
      color: "#6e6779",
      cursor: "pointer",
      height: 30,
      outline: "none",
      position: "absolute",
      right: 0,
      top: 0,
      width: 30,
    }

    return (
      <button
        style={{ ...openEmotePickerButtonStyle, ...styleHover, ...styleActive }}
        onClick={this.handleButtonClick}
        onFocus={this.handleButtonFocus}
        onBlur={this.handleButtonBlur}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <img src="./icons/smile.svg" />
      </button>
    )
  }
}


class ChatButton extends React.Component {
  state = {
    active: false,
    hover: false,
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  handleChatButtonClick = () => {
    this.props.onChatClick()
  }

  handleChatButtonFocus = () => {
    this.setState({ active: true })
  }

  handleChatButtonBlur = () => {
    this.setState({ active: false })
  }

  render() {
    let styleHover = {}, styleActive = {};

    if (this.state.hover) {
      styleHover = {
        background: "rgb(125,91,190)",
        borderColor: "#7d5bbe",
        color: "#fff"
      }
    }

    if (this.state.active) {
      styleActive = {
        background: "#6441a4",
        borderColor: "#7d5bbe",
        boxShadow: "0px 0px 6px 0px #7d5bbe",
      }
    }

    const sendButton = {
      background: "#6441a4",
      bottom: 0,
      border: "1px solid transparent",
      borderRadius: 2,
      color: "#FFF",
      cursor: "pointer",
      height: 30,
      outline: "none",
      position: "absolute",
      right: 0,
      width: 40,
    };

    const sendButtonText = {
      textAlign: "center",
      fontFamily: "arial",
      fontSize: 12,
    };
    return (
      <button
        style={{ ...sendButton, ...styleHover, ...styleActive }}
        onClick={this.handleChatButtonClick}
        onFocus={this.handleChatButtonFocus}
        onBlur={this.handleChatButtonBlur}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <span style={sendButtonText}>
          Chat
        </span>
      </button>
    )
  }
}

// class InputBlock extends React.Component {

// }

// class ChatContent extends React.Component {

// }

// class EmotePicker extends React.Component {

// }



// class ChatRoom extends React.Component {

//   state = {
//     text: '',
//     messages: [],
//   }

//   componentDidMount() {
//     socket.on("newMessage", data => this.setState({
//       messages: this.state.messages.concat({ from: data.from, text: data.text })
//     }));

//     socket.on("newLocationMessage", data => this.setState(prevState => {
//       return {
//         messages: [...prevState.messages, { from: data.from, url: data.url, urlText: "My current location" }]
//       }
//     }));

//   }

//   handleTextChange = (e) => {
//     this.setState({ text: e.target.value });
//   }

//   handleSendClick = (e) => {
//     e.preventDefault();

//     socket.emit('createMessage', {
//       from: 'User',
//       text: this.state.text,
//     }, function () {

//     })
//   }

//   handleSendLocationClick = (e) => {
//     if (!navigator.geolocation) {
//       return alert('Geolocation not supported by browser.');
//     }

//     navigator.geolocation.getCurrentPosition((position) => {
//       socket.emit('createLocationMessage', {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       });
//     }, () => {
//       alert('Unable to fetch location.')
//     })

//   }

//   render() {

//     return (
//       <div>
//         <form id="message-form">
//           <input
//             name="message"
//             type="text"
//             placeholder="Message"
//             value={this.state.text}
//             onChange={this.handleTextChange}
//           />
//           <button
//             onClick={this.handleSendClick}
//           >
//             Send
//           </button>
//         </form>

//         <ul>
//           {this.state.messages.map(({ from, text, url, urlText }, i) =>
//             <li key={i}>{from}: {text}<a target="_blank" href={url}>{urlText}</a></li>
//           )}
//         </ul>

//         <button id="send-location" onClick={this.handleSendLocationClick}>Send Location</button>

//       </div>
//     );
//   }

// }



const domContainer = document.querySelector('#ChatApp');
ReactDOM.render(e(ChatApp), domContainer);