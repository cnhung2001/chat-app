import React from "react";
import dayjs from "dayjs";
import "./ChatView.css";
var relativeTime = require("dayjs/plugin/relativeTime");
require("dayjs/locale/vi");
dayjs.locale("vi");
dayjs.extend(relativeTime);

const userInfo = {
  id: "4478874723614148974",
};

const ChatViewItem = ({ message, isGroup }) => {
  return (
    <div
      className={
        message.sender.id === userInfo.id
          ? "message-sender"
          : "message-receiver"
      }
    >
      {message.sender.id !== userInfo.id && !isGroup ? (
        <div className="message-avatar">
          <img src={message.sender.avatar} alt="" width={35} height={35} />
        </div>
      ) : (
        <div className="message-avatar"></div>
      )}
      <div className="group-message">
        <div className="message-content">
          {!isGroup && message.sender.id !== userInfo.id && (
            <div className="message-title">{message.sender.fullname}</div>
          )}
          <div className="message-attachment">
            {message.attachments?.map((file) =>
              file.mime.includes("image") ? (
                <img src={file.url} alt="" />
              ) : (
                <video poster={file.thumbnail} controls>
                  <source src={file.url}></source>
                </video>
              )
            )}
          </div>

          {message.text && <div className="message-text">{message.text}</div>}
        </div>
      </div>
      {/* {!isGroup && (
        <div className="message-time-divider">
          {dayjs(message.created_at).fromNow()}
        </div>
      )} */}
    </div>
  );
};

export default ChatViewItem;
