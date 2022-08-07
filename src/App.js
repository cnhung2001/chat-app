import {
  BellOutlined,
  DownOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Channel from "./components/Channel/Channel.jsx";
import ChannelTools from "./components/ChannelTools/channelTools";
import ChatView from "./components/ChatView/ChatView";
import ChatViewInfor from "./components/ChatViewInfor/ChatViewInfor";
import FooterChat from "./components/Footer/FooterChat";
import HeaderChat from "./components/Header/HeaderChat";
import HiddenSidebar from "./components/hiddenSidebar/hiddenSidebar";
import { fetchData } from "./utils/fetchData";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSendMessage, setIsSendMessage] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true);
        const data = await fetchData("https://chat.ghtk.vn/api/v3/channels");
        setChannels(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchChannels();
  }, [isSendMessage]);

  const sendMessage = () => {
    setIsSendMessage(!isSendMessage);
  };

  // if (loading) return <Loading />;
  return (
    <Router>
      <Layout>
        <Sider width={340}>
          <div className="header-channel-list">
            <div className="header-left">
              <HiddenSidebar />
              <div className="name-website" title="Chat nội bộ">
                Chat nội bộ
              </div>
            </div>
            <div className="noti-website">
              <BellOutlined style={{ color: "#069255", fontSize: 20 }} />
            </div>
          </div>
          <div className="container-channel-list">
            <div className="search-wrapper">
              <input
                type="text"
                className="input-search"
                placeholder="Tìm kiếm"
              ></input>
              <span className="icon-search">
                <SearchOutlined style={{ fontSize: 16 }} />
              </span>
              <span className="btn-filter">
                Lọc
                <DownOutlined style={{ fontSize: 10, marginLeft: "3px" }} />
              </span>
            </div>
            <ChannelTools />
            <div className="list_channel_inter">
              {channels?.map((channel) => (
                <Link to={"/messages?channel_id=" + channel.channel_id}>
                  <div>
                    <Channel
                      name={channel.channel_name}
                      avatar={channel.avatar || channel.author.avatar}
                      lastMessage={channel.last_message.text}
                      LMTime={channel.last_message.created_at.slice(5, 10)}
                      isSendMessage={isSendMessage}
                      lastMessageUserId={channel.last_message.sender.id}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 10, fontSize: "28px" }}
          >
            <HeaderChat defaultChannel={channels[0]} />
            {React.createElement(
              collapsed ? EllipsisOutlined : EllipsisOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>

          <Content className="site-layout-background">
            <ChatView
              defaultChannel={channels[0]}
              isSendMessage={isSendMessage}
              sendMessage={sendMessage}
            />
          </Content>
          <Footer>
            <FooterChat sendMessage={sendMessage} />
          </Footer>
        </Layout>
        <Sider
          width={385}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={0}
        >
          <ChatViewInfor />
        </Sider>
      </Layout>
    </Router>
  );
};

export default App;
