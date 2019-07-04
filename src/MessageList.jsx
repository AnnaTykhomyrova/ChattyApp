import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <main className="messages">
         { this.props.messages.map((data) => {
          if (data.type === 'incomingMessage') {
            return (<Message
              userID={ data.id }
              currentUsername={ data.username }
              currentMessage={ data.content }
              color={ data.userColor} 
            />)
            } else {
            return (<Notification
              userID={ data.id }
              oldUserName={ data.oldusername }
              newUserName={ data.newusername }
            />)
            }
          }
        )}
      </main>
    );
  }
}
export default MessageList;