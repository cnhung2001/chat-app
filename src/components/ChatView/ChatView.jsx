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
    "c_5l5d7qrwkjpakxceyonfarvqnivhheo2di6man4jov79vznsdluggsowuyr34b0p";

  const ws = new WebSocket(
    `wss://ws.ghtk.vn/ws/chat?Authorization=${token}&appType=gchat&appVersion=2022-07-29%2C02%3A14%3A08&device=web&deviceId=zhXaUEkd5S0zxjrNPScW&source=chats`
  );

  ws.onopen = function () {
    ws.send(`${token}|sub|chats_user_6801990813180061667`);
  };

  ws.onmessage = function (e) {
    let message = JSON.parse(e.data);
    console.log(message);
    if (message.event === "message") {
      const lastMessage = {
        attachments: message.data.attachments,
        channel_id: message.data.channel_id,
        channel_mode: message.data.channel_mode,
        channel_type: message.data.channel_type,
        created_at: message.data.created_at,
        id: message.data.id,
        is_pin: message.data.is_pin,
        msg_type: message.data.msg_type,
        ref_id: message.data.ref_id,
        score: message.data.score,
        sender: message.data.sender,
        status: message.data.status,
        text: message.data.text,
        total_seen: message.data.total_seen,
      };
      // setMessages(message.data.text);
    }
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
