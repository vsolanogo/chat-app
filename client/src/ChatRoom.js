import React, { Component } from 'react'; 
import uuid from 'uuid';
import socketIOClient from 'socket.io-client' 

import {ChatContent} from './ChatContent'; 
import {InputBlock} from './InputBlock'; 

const socket = socketIOClient("http://localhost:3001")
 

export class ChatRoom extends React.Component {
  state = {
    smilesNames: [":)", ":(", ":D", ">(", ":|", "O_o",
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
    ],

    chatLines: [
      {
        user: "Browser",
        text: "HeyGuys HeyGuys HeyGuys HeyGuys HeyGuys HeyGuys ",
        id: uuid.v4(),
      },
    ],
    smiles: [],
  }

  componentWillMount() {
    const newSmiles = new Array();

    for (let i = 0; i < 213; i++) {
      newSmiles.push(this.createImageObj(`${i + 1}.png`, this.state.smilesNames[i]));
    }

    this.setState({
      smiles: newSmiles,
    })
  }

  componentDidMount() {
    socket.on("newMessage", data => {
      
      this.setState({
        chatLines: this.state.chatLines.concat({ user: data.from, text: data.text, id: uuid.v4() })
      })
    }
    );

  }

  createImageObj = (fileName, label) => {
    return {
      fileName,
      label,
      id: uuid.v4(),
    }
  }

  handleSendMessage = (p) => {
    //this.sendNewMessage(p)
    socket.emit('createMessage', {
      from: 'User',
      text: p,
    }, function () {

    })

  }

  // sendNewMessage = (m) => {
  //   this.setState({
  //     chatLines: this.state.chatLines.concat({ user: "User", text: m, id: uuid.v4() })
  //   })
  // }

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
          smilesNames={this.state.smilesNames}
        />
        <InputBlock
          onChatClick={this.handleSendMessage}
          smiles={this.state.smiles}
        />
      </div>
    );
  }
}