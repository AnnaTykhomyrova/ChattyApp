import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor (props) {
    super(props);

    // store the socket connection object
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [], // messages coming from the server will be stored here as they arrive
      usersCount: 0,
    }
  }

componentDidMount() {
  console.log("componentDidMount <App />");
  this.socket.onopen = function (event) {
    console.log('Connected to server');
  };

  this.socket.onmessage = (event) => {
    console.log("The event onmessage data is: ", event.data);
    // code to handle incoming message
    // The socket event data is encoded as a JSON string.
    // This line turns it into an object
    if (event.data == parseInt(event.data)) {
      this.setState({ usersCount: event.data });
    } else {
      const data = JSON.parse(event.data);
    this.setState({ messages: this.state.messages.concat(data.message)});
    console.log("Current state is", this.state.messages);
    }
  }
}

addName = (event) => {
  const oldusername = this.state.currentUser.name;
    // console.log('old state is: ',this.state);

  if (event.key === 'Enter') {
    this.setState({currentUser: {name: event.target.value}});
    // console.log('new state is: ',this.state);
    // console.log('event target value is: ',event.target.value);

    let msg = {
      type: "postNotification",
      oldusername: oldusername,
      newusername: event.target.value
    };
    console.log('msg is: ',msg);
    this.sendMessageToServer({ message: msg });
    event.target.value = '';
  }
}

// Send msg object as a JSON-formatted string.
sendMessageToServer = (msg) => {
  this.socket.send(JSON.stringify(msg));
  // console.log("JSON.stringify(msg) is: ", JSON.stringify(msg));
}

addMessage = (event) => {
    if(event.key === 'Enter'){

      const msg = {
        type: 'postMessage',
        username: this.state.currentUser.name,
        content: event.target.value
      };
      this.sendMessageToServer({message: msg});
      console.log("msg is: ", msg);
      event.target.value = '';
    }
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="navbar-usersCount">{this.state.usersCount} users online</span>
        </nav>
        <MessageList  messages={this.state.messages} />
        <ChatBar  currentUser={this.state.currentUser}
          addMessage={this.addMessage} 
          addName={this.addName} 
        />
      </div>
    );
  }
}
export default App;
