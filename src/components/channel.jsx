import React from "react";
import "../CSS/channel.css";

const Channel = (props) => {
  const { avatar, name, lastMessage, LMTime } = props;

  return (
    <div className="channel_sum">
      <div className="channel_avatar">
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <div className="channel_content">
        <div className="channel_name">{name}</div>
        <div className="LM">
          <div className="lastMessage">{lastMessage}</div>
          <div className="LMTime">{LMTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
