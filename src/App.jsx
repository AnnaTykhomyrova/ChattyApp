import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor (props) {
    super(props);

    // store the socket connection object
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: "Bob"},
      messages: [], // messages coming from the server will be stored here as they arrive
    }
  }

componentDidMount() {
  console.log("componentDidMount <App />");
  // const socket = new WebSocket("ws://localhost:3001/");
  this.socket.onopen = function (event) {
    console.log('Connected to server');
  };
}

// Send msg object as a JSON-formatted string.
sendMessageToServer = (msg) => {
  this.socket.send(JSON.stringify(msg));
  // console.log("JSON.stringify(msg) is: ", JSON.stringify(msg));
}

addMessage = (event) => {
    if(event.key === 'Enter'){
      console.log('enter pressed here! ')
      let newMessage = {
          id: this.state.messages.length + 1,
          username: this.state.currentUser.name,
          content: event.target.value
      }
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})

      let msg = {
        type: 'sendMessage',
        username: this.state.currentUser.name,
        content: event.target.value
      };
      this.sendMessageToServer({message: msg});
      console.log("msg is: ", msg);
      // console.log(`User ${msg.username} said ${msg.content}`);
      event.target.value = "";
    }
}

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList  messages={this.state.messages} />
        <ChatBar  currentUser={this.state.currentUser}
        addMessage={this.addMessage} />
      </div>
    );
  }
}
export default App;
