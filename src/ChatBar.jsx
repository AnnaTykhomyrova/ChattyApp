import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)"
        value={this.props.currentUser.name}
               onChange={this.props.addName} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER"
        onKeyPress={this.props.addMessage} />
      </footer>
    );
  }
}

export default ChatBar;