import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" 
          placeholder={this.props.currentUser.name}
          // value={this.props.currentUser.name}
          onKeyPress={this.props.addName} />
        <input className="chatbar-message" 
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.props.addMessage} />
      </footer>
    );
  }
}

export default ChatBar;