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
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await fetchData(
          `https://chat.ghtk.vn/api/v3/messages?channel_id=${
            searchParams.get("channel_id") || defaultChannel.channel_id
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
  const token =
    "c_m9jmyhcalkxytkut6nfqnuzvmoombgwd1h3lvg9z653lh1hyiz7qxhaqgmmsldwg";

  const ws = new WebSocket(
    `wss://ws.ghtk.vn/ws/chat?Authorization=${token}&appType=gchat&appVersion=2022-07-29%2C02%3A14%3A08&device=web&deviceId=zhXaUEkd5S0zxjrNPScW&source=chats`
  );

  ws.onopen = function () {
    ws.send(`${token}|sub|chats_user_6801990813180061667`);
  };

  ws.onmessage = function (e) {
    let message = JSON.parse(e.data);
    console.log(message);
  };

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
              <>
                <ChatViewItem
                  message={message}
                  key={message.id}
                  isGroup={isGroup}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ChatView;
