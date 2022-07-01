import React from "react";
import "./messagedisp.css";
import Avatar from "../Avatar/Avatar.jsx";

const MessageDisp = ({ message, color }) => {
  // console.log(message);

  
  const bg = color == "primary" ? "#DFF6FF" : "#1b72e8";
  const side = color == "primary" ? "flextEnd" : "flexEnd";
  // console.log(side);
  return (
    <div className="message-disp-wrapper">
      <div className="message-left">
        <Avatar img={message.url} />
      </div>
      <div
        className="message-right"
        style={{ backgroundColor: bg, justifyContent: "flex-end" }}
      >
        <div className="message-name">{message.name}</div>
        <small className="message-text">{message.msg}</small>
      </div>
    </div>
  );
};

export default MessageDisp;
