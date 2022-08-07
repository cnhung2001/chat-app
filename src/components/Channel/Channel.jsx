import { Avatar } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";
import "./Channel.css";

const userInfo = {
  id: "4478874723614148974",
};

const Channel = (props) => {
  const { avatar, name, lastMessage, LMTime, lastMessageUserId } = props;

  return (
    <div className="channel_sum" tabindex="1">
      <div className="channel_avatar">
        <Avatar src={avatar} size={52} />
      </div>
      <div className="channel_content">
        <div className="channel_name">{name}</div>
        <div className="LM">
          <div className="lastMessage">
            {lastMessageUserId === userInfo.id ? (
              <div style={{ display: "flex" }}>
                <span style={{ marginRight: 5 }}>Bạn:</span>{" "}
                <ReactMarkdown>{lastMessage}</ReactMarkdown>
              </div>
            ) : (
              <ReactMarkdown>{lastMessage}</ReactMarkdown>
            )}
          </div>
          <div className="LMTime">{LMTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
