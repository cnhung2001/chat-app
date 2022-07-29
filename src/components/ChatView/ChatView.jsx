import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { Spin } from "antd";
import ChatViewItem from "./ChatViewItem";
import "./ChatView.css";

const ChatView = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          "https://chat.ghtk.vn/api/v3/messages?channel_id=1676242464193100389&limit=50"
        );
        const sortedMessage = data.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        console.log(sortedMessage);
        setMessages(sortedMessage);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  if (loading) return <Spin />;

  return (
    <div className="chat-view-message">
      <div className="container-message">
        {messages?.length > 0 &&
          messages.map((message, index) => {
            let isGroup = false;
            if (index === 0) isGroup = true;
            else if (message?.sender.id === messages[index - 1]?.sender.id)
              isGroup = true;

            return (
              <ChatViewItem
                message={message}
                key={message.id}
                isGroup={isGroup}
                // index={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ChatView;
