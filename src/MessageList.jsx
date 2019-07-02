import React, {Component} from 'react';
import Message from "./Message.jsx";
import Notification from './Notification.jsx';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <main className="messages">
        { this.props.messages.map((data, index) =>
              <Message
                key={ index }
                currentUsername={ data.username }
                currentMessage={ data.content }
              />
        )}
      </main>
    );
  }
}
export default MessageList;