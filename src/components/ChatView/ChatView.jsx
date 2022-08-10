import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import ChatViewItem from "./ChatViewItem";
import "./ChatView.css";
import Loading from "../common/Loading/Loading";

const ChatView = ({ defaultChannel, isSendMessage }) => {
  let [searchParams] = useSearchParams();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document
      .querySelector("#flag-scroll")
      .scrollIntoView({ behavior: "smooth", block: "start" });

    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://chat.ghtk.vn/api/v3/messages?channel_id=${searchParams.get("channel_id") || defaultChannel.channel_id
          }&limit=50`
        );
        const sortedMessage = data.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        setMessages(sortedMessage);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [searchParams, isSendMessage]);

  if (loading) return <Loading />;

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
                key={index}
                isGroup={isGroup}
              />
            );
          })}
        <div id="flag-scroll"></div>
      </div>
    </div>
  );
};

export default ChatView;
