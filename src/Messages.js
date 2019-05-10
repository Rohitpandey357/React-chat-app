import {Component} from "react";
import React from "react";

let i = 0;

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }


renderMessage(message) {
    i++;
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li key = {i} className={className}>
      <span
        className="avatar"
        style={{backgroundColor: currentMember.color}}
      />
        <div className="Message-content">
          <div className="username">
            {currentMember.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}
export default Messages;


