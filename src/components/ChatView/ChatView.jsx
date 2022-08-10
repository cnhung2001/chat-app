import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import Loading from "../common/Loading/Loading";
import "./ChatView.css";
import ChatViewItem from "./ChatViewItem";

const ChatView = ({ defaultChannel, isSendMessage, sendMessage }) => {
  let [searchParams] = useSearchParams();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showBackBottom, setShowBackBottom] = useState(false);
  const [lastMessage, setLastMessage] = useState();

  useEffect(() => {
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
        // console.log("messages", sortedMessage);
        setMessages(sortedMessage);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [searchParams, isSendMessage, defaultChannel]);

  useEffect(() => {
    if (messages.length) {
      const newMessages = [...messages];
      newMessages.push(lastMessage);
      setMessages(newMessages);
      sendMessage(true);
    }
  }, [lastMessage]);

  useEffect(() => {
    const token =
      "c_ftbdvan8z2pjd7jd0busjn2prrouawgbjucen9caidhuq26dkliavrsw6szxrczf";

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
        const lastMessageData = {
          attachments: message?.data.attachments,
          channel_id: message?.data.channel_id,
          channel_mode: message?.data.channel_mode,
          channel_type: message?.data.channel_type,
          created_at: message?.data.created_at,
          id: message?.data.id,
          is_pin: message?.data.is_pin,
          msg_type: message?.data.msg_type,
          ref_id: message?.data.ref_id,
          score: message?.data.score,
          sender: message?.data.sender,
          status: message?.data.status,
          text: message?.data.text,
          total_seen: message?.data.total_seen,
        };
        setLastMessage(lastMessageData);
      }
    };
  }, []);

  const handleGoToBottom = () => {
    document.querySelector(".chat-view-message").scrollTo({ top: "100vh" });
  };

  const handleViewMessageScroll = (e) => {
    if (
      Math.abs(document.querySelector(".chat-view-message").scrollTop) >= 200
    ) {
      setShowBackBottom(true);
    } else setShowBackBottom(false);
  };

  if (loading && !lastMessage) return <Loading />;

  return (
    <div className="chat-view-message" onScroll={handleViewMessageScroll}>
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
                  key={}
                  isGroup={isGroup}
                />
              </>
            );
          })}
      </div>
      {showBackBottom && (
        <div className="go-to-bottom" onClick={handleGoToBottom}>
          <DownOutlined style={{ fontSize: 14, color: "#a7a6a6" }} />
        </div>
      )}
    </div>
  );
};

export default ChatView;
