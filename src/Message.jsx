import React, {Component} from 'react';

class Message extends Component {
  propTypes = {
    currentUsername: React.PropTypes.string.isRequired,
    currentMessage: React.PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="message">
        <span className="message-username">{this.props.currentUsername}</span>
        <span className="message-content">{this.props.currentMessage}</span>
      </div>
     // <div className="message system">
       // Anonymous1 changed their name to nomnom.
     // </div>
    );
  }
}
export default Message;