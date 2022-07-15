import React from "react";
import "./App.css";
import { Layout } from "antd";
import Channel from "./components/channel.jsx";
const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider>
        <div class="header-channel-list">
          <span class="trigger">
            <span class="logo-menu badge-icon">
              <svg
                width="20"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                class="logo-menu"
              >
                <g>
                  <path
                    d="M34.5938 13.8281H1.40625C0.629578 13.8281 0 14.7235 0 15.8281C0 16.9327 0.629578 17.8281 1.40625 17.8281H34.5938C35.3704 17.8281 36 16.9327 36 15.8281C36 14.7235 35.3704 13.8281 34.5938 13.8281Z"
                    fill="black"
                  ></path>
                  <path
                    d="M34.5938 4.45312H1.40625C0.629578 4.45312 0 5.34853 0 6.45312C0 7.55772 0.629578 8.45312 1.40625 8.45312H34.5938C35.3704 8.45312 36 7.55772 36 6.45312C36 5.34853 35.3704 4.45312 34.5938 4.45312Z"
                    fill="black"
                  ></path>
                  <path
                    d="M34.5938 23.2031H1.40625C0.629578 23.2031 0 24.0985 0 25.2031C0 26.3077 0.629578 27.2031 1.40625 27.2031H34.5938C35.3704 27.2031 36 26.3077 36 25.2031C36 24.0985 35.3704 23.2031 34.5938 23.2031Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="30" height="30" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div class="name-website" title="Chat nội bộ">Chat nội bộ </div>
          </span>
          <div class="noti-website">
            <span class="noti-logo badge-icon">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                <g>
                  <path
                    d="M18.2742 17.3692L16.8425 14.9842C16.1825 13.8834 15.8333 12.6234 15.8333 11.3392V9.25001C15.8333 6.03419 13.2158 3.41669 10 3.41669C6.7842 3.41669 4.1667 6.03419 4.1667 9.25001V11.3392C4.1667 12.6234 3.81752 13.8834 3.15752 14.9842L1.72584 17.3692C1.64834 17.4975 1.64666 17.6584 1.72002 17.7884C1.7942 17.9192 1.93334 18 2.08334 18H17.9167C18.0667 18 18.2058 17.9192 18.28 17.7884C18.3533 17.6583 18.3517 17.4975 18.2742 17.3692ZM2.8192 17.1667L3.8717 15.4125C4.61002 14.1825 5.00002 12.7742 5.00002 11.3392V9.25001C5.00002 6.49251 7.24252 4.25001 10 4.25001C12.7575 4.25001 15 6.49251 15 9.25001V11.3392C15 12.7742 15.39 14.1825 16.1275 15.4125L17.1808 17.1667H2.8192Z"
                    fill="#00904A"
                  ></path>
                  <path
                    d="M10 0.5C9.08082 0.5 8.33331 1.2475 8.33331 2.16668V3.83336C8.33331 4.06332 8.51999 4.25 8.74999 4.25C8.98 4.25 9.16668 4.06332 9.16668 3.83332V2.16668C9.16668 1.70668 9.54 1.33336 10 1.33336C10.46 1.33336 10.8333 1.70668 10.8333 2.16668V3.83336C10.8333 4.06332 11.02 4.25 11.25 4.25C11.48 4.25 11.6667 4.06332 11.6667 3.83332V2.16668C11.6667 1.2475 10.9192 0.5 10 0.5Z"
                    fill="#00904A"
                  ></path>
                  <path
                    d="M11.8033 17.3724C11.6858 17.1741 11.4316 17.1091 11.2325 17.2232C11.0333 17.3399 10.9667 17.5957 11.0833 17.794C11.1916 17.9782 11.2508 18.199 11.2508 18.4165C11.2508 19.1057 10.69 19.6665 10.0008 19.6665C9.31162 19.6665 8.7508 19.1057 8.7508 18.4165C8.7508 18.199 8.80998 17.9782 8.9183 17.794C9.03412 17.5948 8.96748 17.3398 8.76912 17.2232C8.5683 17.109 8.31494 17.174 8.1983 17.3724C8.01413 17.6874 7.91663 18.0482 7.91663 18.4166C7.91667 19.5657 8.8508 20.4999 9.99998 20.4999C11.1492 20.4999 12.0833 19.5657 12.085 18.4166C12.085 18.0482 11.9875 17.6874 11.8033 17.3724Z"
                    fill="#00904A"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div id="container-channel-list">
          <div class="search-wrapper">
            <input
              type="text"
              class="input-search"
              placeholder="Tìm kiếm"
            ></input>
            <span class="icon-search">
              <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 192.904 192.904">
                <path
                  d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0 C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078 c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193 C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187 C44.693,147.38,15,117.689,15,81.193z"
                  fill="#999"
                ></path>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </span>
            <span class="btn-filter">Lọc</span>
            <span role="img" aria-label="down" class="anticon anticon-down">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
            </span>
          </div>
          <div class="list_channel_inter">
            <div>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              <Channel name="Ban Văn Hóa Truyền Thông" avatar="https://cache.giaohangtietkiem.vn/d/9ccd62da444b43329c80799a0b5e675b.jpg" lastMessage="Cùng lên kế hoạch chuẩn bị cho sức khỏe của cả sống bạn nhé!" LMTime="20:20"/>
              
            </div>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
