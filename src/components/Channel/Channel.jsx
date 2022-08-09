import { Avatar } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";
import "./Channel.css";

const Channel = (props) => {
  const { avatar, name, lastMessage, LMTime, attachment } = props;

  return (
    <div className="channel_sum" tabindex="1">
      <div className="channel_avatar">
        <Avatar src={avatar} size={52} />
      </div>
      <div className="channel_content">
        <div className="channel_name">{name}</div>
        <div className="LM">
          <div className="lastMessage">
            {attachment!=null ? attachment : lastMessage}
          </div>
          <div className="LMTime">{LMTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
