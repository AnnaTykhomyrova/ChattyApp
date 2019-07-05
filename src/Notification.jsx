import React, {Component} from 'react';

class Notification extends Component {
  render() {
    return (
      <div className="notification">
         <span className="notification-content" style={{fontStyle: 'italic'}}>{this.props.oldUserName} changed their name to {this.props.newUserName} ::</span>
      </div>
    );
  }
}
export default Notification;