import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import "./ChatViewInfor.css";
import { Switch } from 'antd';
import { Avatar } from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const ChatViewInfor = ({ defaultChannel }) => {
  let [searchParams] = useSearchParams();
  const [channelInfo, setchannelInfo] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const data = await fetchData(
          `https://chat.ghtk.vn/api/v3/channels/info?channel_id=${searchParams.get("channel_id") || defaultChannel.channel_id
          }&limit=50`
        );
        console.log(data)
        setchannelInfo(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [searchParams])

  return (
    <>

      <div className="chat-view__infor">
        <div className="channel-info-container" style={{ display: 'block' }}>
          <div className="channel-info-block">
            <div className="avatar-channel-info">
              <div className="avatar-container">
                {channelInfo.channel_type == "group" ?
                  <>
                    {channelInfo.group_images.map((i, index) =>
                      <div className="avatar-channel-info__avatar_group" key={'avt-' + index}>
                        <img src={i.avatar} alt="avatar-info" />
                      </div>
                    )}
                    <div className="avatar-channel-info__total-member"> +{channelInfo?.count_member - 3}
                    </div> </> : <>
                    <div className="avatar-channel-info__avatar_single">
                      <img src={channelInfo.avatar} alt="avatar-info" />
                    </div>
                  </>
                }



              </div>

              <div className="channel-name-info-container">
                <div className="channel-name-info">
                  <div className="channel-name-info__title">
                    <span className="text">
                      {channelInfo?.channel_name}
                      <span className="badges-container">
                        <span>
                        </span>
                      </span>
                    </span>
                  </div>
                  {channelInfo.channel_type == "group" ?
                    <>
                      <div className="channel-name-info__description">
                        <span>
                          {channelInfo?.count_member} thành viên
                        </span>
                      </div>
                    </> : <></>}
                </div>

                <div className="short-action-channel-info">
                  <div className="short-action-channel-info__block-icon">
                    <div className="short-action-channel-info__icon">
                      <svg width="29" height="27" viewBox="0 0 29 27" fill="none">
                        <path d="M21.6654 21.8026V19.6359C21.6654 18.4867 21.2088 17.3845 20.3962 16.5718C19.5835 15.7592 18.4813 15.3026 17.332 15.3026H8.66536C7.51609 15.3026 6.41389 15.7592 5.60123 16.5718C4.78858 17.3845 4.33203 18.4867 4.33203 19.6359V21.8026" fill="white">
                        </path>
                        <path d="M21.6654 21.8026V19.6359C21.6654 18.4867 21.2088 17.3845 20.3962 16.5718C19.5835 15.7592 18.4813 15.3026 17.332 15.3026H8.66536C7.51609 15.3026 6.41389 15.7592 5.60123 16.5718C4.78858 17.3845 4.33203 18.4867 4.33203 19.6359V21.8026H21.6654Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M13.0018 12.4772C15.395 12.4772 17.3351 10.5371 17.3351 8.14388C17.3351 5.75065 15.395 3.81055 13.0018 3.81055C10.6086 3.81055 8.66846 5.75065 8.66846 8.14388C8.66846 10.5371 10.6086 12.4772 13.0018 12.4772Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M28.5921 9.2501C28.5921 9.66094 28.2353 9.99389 27.7949 9.99389H25.146V12.7562C25.146 13.1672 24.7892 13.5001 24.349 13.5C24.1289 13.5 23.9297 13.4169 23.7856 13.2823C23.6414 13.1476 23.5522 12.9617 23.5523 12.7564L23.5522 9.99378H20.7966C20.5766 9.99378 20.3775 9.91065 20.2331 9.7759C20.0891 9.64147 20 9.45553 20 9.2501C19.9999 8.83934 20.3566 8.50631 20.797 8.50631H23.5523V5.74395C23.5523 5.33306 23.9092 5 24.3494 5C24.7894 5.00011 25.146 5.33284 25.1462 5.74368V8.50631H27.7955C28.2356 8.50654 28.5919 8.83934 28.5921 9.2501Z" fill="white">
                        </path>
                      </svg>
                    </div>
                    <span>
                      Thêm
                    </span>
                  </div>
                  <div className="short-action-channel-info__block-icon">
                    <div className="short-action-channel-info__icon">
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="25" fill="#00904A">
                        </circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M27.7891 32.092C30.6446 30.8694 32.6452 28.0339 32.6452 24.7311C32.6452 20.3109 29.0619 16.7277 24.6417 16.7277C20.2215 16.7277 16.6382 20.3109 16.6382 24.7311C16.6382 26.8681 17.4757 28.8094 18.8404 30.2448C18.2451 31.1388 17.5181 32.3915 17.0806 33.1791H21.0823H24.1948L27.3072 32.7345L27.7891 32.092Z" fill="white">
                        </path>
                        <path d="M21.1141 24.1439C20.9383 24.1439 20.7663 24.1977 20.6201 24.2984C20.4738 24.3991 20.3599 24.5423 20.2926 24.7098C20.2252 24.8773 20.2076 25.0616 20.242 25.2394C20.2763 25.4172 20.361 25.5806 20.4853 25.7088C20.6097 25.837 20.7681 25.9243 20.9407 25.9596C21.1132 25.995 21.292 25.9769 21.4545 25.9075C21.6169 25.8381 21.7558 25.7206 21.8535 25.5699C21.9513 25.4191 22.0034 25.2419 22.0034 25.0606C22.0034 24.8175 21.9097 24.5843 21.743 24.4124C21.5762 24.2405 21.35 24.1439 21.1141 24.1439ZM24.6712 24.1439C24.4954 24.1439 24.3234 24.1977 24.1772 24.2984C24.0309 24.3991 23.917 24.5423 23.8497 24.7098C23.7824 24.8773 23.7647 25.0616 23.7991 25.2394C23.8334 25.4172 23.9181 25.5806 24.0424 25.7088C24.1668 25.837 24.3253 25.9243 24.4978 25.9596C24.6703 25.995 24.8491 25.9769 25.0116 25.9075C25.174 25.8381 25.3129 25.7206 25.4107 25.5699C25.5084 25.4191 25.5605 25.2419 25.5605 25.0606C25.5605 24.8175 25.4668 24.5843 25.3001 24.4124C25.1333 24.2405 24.9071 24.1439 24.6712 24.1439ZM28.2283 24.1439C28.0525 24.1439 27.8805 24.1977 27.7343 24.2984C27.5881 24.3991 27.4741 24.5423 27.4068 24.7098C27.3395 24.8773 27.3218 25.0616 27.3562 25.2394C27.3905 25.4172 27.4752 25.5806 27.5995 25.7088C27.7239 25.837 27.8824 25.9243 28.0549 25.9596C28.2274 25.995 28.4062 25.9769 28.5687 25.9075C28.7312 25.8381 28.87 25.7206 28.9678 25.5699C29.0655 25.4191 29.1176 25.2419 29.1176 25.0606C29.1176 24.8175 29.0239 24.5843 28.8572 24.4124C28.6904 24.2405 28.4642 24.1439 28.2283 24.1439ZM24.6712 15.8939C23.5034 15.8939 22.3471 16.131 21.2681 16.5917C20.1892 17.0524 19.2089 17.7276 18.3831 18.5788C16.7154 20.2979 15.7785 22.6294 15.7785 25.0606C15.7707 27.1773 16.4817 29.2301 17.7882 30.8631L16.0097 32.6964C15.8863 32.8253 15.8027 32.989 15.7695 33.1668C15.7362 33.3447 15.7548 33.5287 15.8229 33.6956C15.8968 33.8605 16.0165 33.9991 16.167 34.0938C16.3174 34.1884 16.4917 34.2349 16.6678 34.2273H24.6712C27.0298 34.2273 29.2917 33.2615 30.9594 31.5424C32.6271 29.8233 33.564 27.4917 33.564 25.0606C33.564 22.6294 32.6271 20.2979 30.9594 18.5788C29.2917 16.8597 27.0298 15.8939 24.6712 15.8939ZM24.4978 32.8523H18.0009L19.1382 31.5414C19.2222 31.4565 19.289 31.3553 19.3348 31.2436C19.3806 31.1318 19.4045 31.0119 19.405 30.8906C19.4016 30.6488 19.3057 30.4182 19.1382 30.2489C17.9737 29.05 17.2739 27.5957 17.1116 25.9075C16.9494 24.2192 17.532 22.3468 18.4456 20.9356C19.3591 19.5244 20.8726 18.2208 22.4473 17.7273C24.022 17.2337 26.0786 17.413 27.5995 18.0611C29.1205 18.7093 30.5632 19.8983 31.3401 21.3939C32.1169 22.8896 32.1586 24.7098 32.0515 26.4356C31.7316 28.0998 30.5662 29.9417 29.2947 31.0189C28.0233 32.0962 26.1436 32.8509 24.4978 32.8523Z" fill="white">
                        </path>
                        <ellipse cx="20.6" cy="25.2094" rx="1.1" ry="1.1" fill="#00904A">
                        </ellipse>
                        <circle cx="24.7992" cy="25.2094" r="1.1" fill="#00904A">
                        </circle>
                        <ellipse cx="28.9984" cy="25.2094" rx="1.1" ry="1.1" fill="#00904A">
                        </ellipse>
                      </svg>
                    </div>
                    <span>
                      Chat
                    </span>
                  </div>
                  <div className="short-action-channel-info__block-icon">
                    <div className="short-action-channel-info__icon">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0.546532 10.7127L7.27837 17.4446C7.45277 17.6192 7.65986 17.7577 7.88782 17.8522C8.11578 17.9467 8.36013 17.9953 8.6069 17.9953C8.85367 17.9953 9.09802 17.9467 9.32598 17.8522C9.55394 17.7577 9.76103 17.6192 9.93543 17.4446L18.0005 9.38889V0H8.61159L0.546532 8.06506C0.196795 8.41689 0.000488281 8.89281 0.000488281 9.38889C0.000488281 9.88498 0.196795 10.3609 0.546532 10.7127Z" fill="white">
                        </path>
                        <circle cx="13.1747" cy="4.74648" r="1.1" fill="#00904A">
                        </circle>
                      </svg>
                    </div>
                    <span>
                      Gắn thẻ
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <div className="channel-info-block">
              <div className="sub-menu-item">
                <span className="sub-menu-item__left-icon">
                  <svg width="16" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.8104 18.9119L14.6467 13.8308C15.9989 12.3616 16.8297 10.4187 16.8297 8.28068C16.8291 3.7071 13.0619 0 8.41459 0C3.76725 0 0.00012207 3.7071 0.00012207 8.28068C0.00012207 12.8543 3.76725 16.5614 8.41459 16.5614C10.4226 16.5614 12.2642 15.8668 13.7108 14.7122L18.8946 19.8134C19.1471 20.0622 19.5572 20.0622 19.8098 19.8134C20.0629 19.5646 20.0629 19.1607 19.8104 18.9119ZM8.41459 15.2873C4.48243 15.2873 1.29481 12.1504 1.29481 8.28068C1.29481 4.41101 4.48243 1.27403 8.41459 1.27403C12.3468 1.27403 15.5344 4.41101 15.5344 8.28068C15.5344 12.1504 12.3468 15.2873 8.41459 15.2873Z" fill="black">
                    </path>
                  </svg>
                </span>
                <div className="sub-menu-item__block">
                  <div className="sub-menu-item__content">
                    <span>
                      Tìm tin nhắn
                    </span>
                  </div>
                  <div className="sub-menu-item__sub-content">
                  </div>
                </div>
              </div>
              <div className="sub-menu-item">
                <span className="sub-menu-item__left-icon">
                  <svg width="16" height="16" viewBox="0 0 21 20" fill="none">
                    <path d="M5.17133 2.5C3.7907 2.5 2.67133 3.61938 2.67133 5C2.67133 6.38062 3.7907 7.5 5.17133 7.5C6.55195 7.5 7.67133 6.38062 7.67133 5C7.67133 3.61938 6.55195 2.5 5.17133 2.5ZM5.17133 6.25C4.4807 6.25 3.92133 5.69062 3.92133 5C3.92133 4.30938 4.4807 3.75 5.17133 3.75C5.86195 3.75 6.42133 4.31 6.42133 5C6.42133 5.69 5.86195 6.25 5.17133 6.25ZM17.6713 0H2.67133C1.2907 0 0.171326 1.11938 0.171326 2.5V17.5C0.171326 18.8806 1.2907 20 2.67133 20H17.6713C19.0519 20 20.1713 18.8806 20.1713 17.5V2.5C20.1713 1.11938 19.0519 0 17.6713 0ZM2.67133 18.75C1.9807 18.75 1.42133 18.19 1.42133 17.5V16.9125L6.38695 12.4656L12.672 18.75H2.67133ZM18.9213 17.5C18.9213 18.19 18.3619 18.75 17.6713 18.75H14.4413L9.83633 14.0843L15.1713 8.74938L18.9213 12.4994V17.5ZM18.9213 10.705L15.1713 6.875L8.95757 13.1944L6.42133 10.625L1.42133 15.21V2.5C1.42133 1.81 1.9807 1.25 2.67133 1.25H17.6713C18.3619 1.25 18.9213 1.81 18.9213 2.5V10.705Z" fill="black">
                    </path>
                  </svg>
                </span>
                <div className="sub-menu-item__block">
                  <div className="sub-menu-item__content">
                    <span>
                      Ảnh, file, link chia sẻ
                    </span>
                    <span className="sub-menu-item__right-icon">
                      <span>
                        <span>
                          {channelInfo?.total_media}
                        </span>
                        <span role="img" aria-label="right" className="anticon anticon-right">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                            </path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="sub-menu-item__sub-content">
                  </div>
                </div>
              </div>
              <div className="sub-menu-item">
                <span className="sub-menu-item__left-icon">
                  <span role="img" aria-label="clock-circle" className="anticon anticon-clock-circle">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="clock-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                      </path>
                      <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z">
                      </path>
                    </svg>
                  </span>
                </span>
                <div className="sub-menu-item__block">
                  <div className="sub-menu-item__content">
                    <span>
                      Lịch hẹn
                    </span>
                    <span className="sub-menu-item__right-icon">
                      <span>
                        <span>
                          0
                        </span>
                        <span role="img" aria-label="right" className="anticon anticon-right">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                            </path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="sub-menu-item__sub-content">
                  </div>
                </div>
              </div>
              {channelInfo.channel_type == "group" ? <>
                <div className="sub-menu-item">
                  <span className="sub-menu-item__left-icon">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                      <path d="M11.6201 13.3313L11.2987 13.7143L11.6817 14.0357C12.0953 14.3827 12.3301 14.9183 12.3093 15.7426C12.2885 16.5637 12.0241 17.2681 11.5141 17.8758L11.514 17.8758C11.4789 17.9177 11.4421 17.9397 11.3714 17.9458L11.3708 17.9458C11.3007 17.952 11.2603 17.9368 11.2182 17.9014L7.57293 14.8427L7.22822 14.5534L6.90437 14.8659L3.8048 17.8563L6.0569 14.1222L6.27782 13.7559L5.95014 13.4809L2.5173 10.6004C2.47537 10.5652 2.45324 10.5283 2.44693 10.4575C2.44073 10.3868 2.45603 10.3467 2.49121 10.3047C3.00135 9.69679 3.64896 9.31399 4.45387 9.15096C5.26194 8.98737 5.83028 9.12554 6.24377 9.4725L6.6268 9.79389L6.94819 9.41087L10.5987 5.06033L10.9201 4.67731L10.5371 4.35591C10.3478 4.1971 10.2434 3.99942 10.2199 3.73073C10.1964 3.46201 10.2648 3.2493 10.4237 3.05999C10.5826 2.87064 10.7801 2.76636 11.0488 2.74287L11.0489 2.74287C11.3176 2.71935 11.5303 2.78777 11.7196 2.94661L17.1577 7.50967C17.347 7.66854 17.4514 7.86634 17.4747 8.13443L17.4747 8.13494C17.4983 8.40384 17.4299 8.61654 17.2712 8.80574C17.1125 8.99483 16.9148 9.09923 16.6459 9.12265L16.6454 9.1227C16.3774 9.14631 16.1645 9.07785 15.9751 8.91897L15.5921 8.59757L15.2707 8.9806L11.6201 13.3313Z" stroke="black">
                      </path>
                    </svg>
                  </span>
                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        Tin nhắn đã ghim
                      </span>
                      <span className="sub-menu-item__right-icon">
                        <span>
                          <span>
                            0
                          </span>
                          <span role="img" aria-label="right" className="anticon anticon-right">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>


                <div className="channel-info-block">
                  <div className="sub-menu-item">
                    <span className="sub-menu-item__left-icon">
                      <svg width="16" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M12.7002 15V13.3333C12.7002 12.4493 12.3841 11.6014 11.8215 10.9763C11.2589 10.3512 10.4958 10 9.7002 10H3.7002C2.90455 10 2.14148 10.3512 1.57888 10.9763C1.01627 11.6014 0.700195 12.4493 0.700195 13.3333V15" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M6.5 7C8.15685 7 9.5 5.65685 9.5 4C9.5 2.34315 8.15685 1 6.5 1C4.84315 1 3.5 2.34315 3.5 4C3.5 5.65685 4.84315 7 6.5 7Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M17 15V13.2964C16.9996 12.5415 16.8029 11.8082 16.4409 11.2115C16.0789 10.6149 15.5721 10.1887 15 10" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M12 1C12.5721 1.17056 13.0792 1.55796 13.4413 2.10114C13.8034 2.64432 14 3.31238 14 4C14 4.68762 13.8034 5.35567 13.4413 5.89886C13.0792 6.44204 12.5721 6.82944 12 7" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                      </svg>
                    </span>
                    <div className="sub-menu-item__block">
                      <div className="sub-menu-item__content">
                        <span>
                          <div>
                            <span>
                              Thành viên
                            </span>
                            <button type="button" className="ant-btn ant-btn-sm sub-menu-item__btn">
                              <span>
                                +Thêm
                              </span>
                            </button>
                          </div>
                        </span>
                        <span className="sub-menu-item__right-icon">
                          <span>
                            <span>
                              36
                            </span>
                            <span role="img" aria-label="right" className="anticon anticon-right">
                              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                                </path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="sub-menu-item__sub-content">
                        <div className="sub-child-list-member">
                          <div className="sub-child-list-member__block-item">
                            <div className="avatar-channel-wraper">
                              <div>
                                <Avatar size={50} src="https://cache.giaohangtietkiem.vn/d/2be0e0a0478f4adcacdea0ed11c69e1f.jpg?width=125" alt="avatar-channel" alt="avatar-channel" />
                              </div>
                            </div>
                            <div className="sub-child-list-member__title">
                              Ánh
                            </div>
                          </div>
                          <div className="sub-child-list-member__block-item">
                            <div className="avatar-channel-wraper">
                              <div>
                                <Avatar size={50} src="https://cache.giaohangtietkiem.vn/d/e0c5cd7f14b742ed8396d29d1c41368c.jpg?width=125" alt="avatar-channel" alt="avatar-channel" />
                              </div>
                            </div>
                            <div className="sub-child-list-member__title">
                              Anh
                            </div>
                          </div>
                          <div className="sub-child-list-member__block-item">
                            <div className="avatar-channel-wraper">
                              <div>
                                <Avatar size={50} src="https://cache.giaohangtietkiem.vn/d/021ec8188e98486baba843a3cccf1ae2.jpg?width=125" alt="avatar-channel" alt="avatar-channel" />
                              </div>
                            </div>
                            <div className="sub-child-list-member__title">
                              Hằng
                            </div>
                          </div>
                          <div className="sub-child-list-member__block-item">
                            <div className="avatar-channel-wraper">
                              <div>
                                <Avatar size={50} src="https://cache.giaohangtietkiem.vn/d/653f26ecea4144af9fe5434b67621500.jpg?width=125" alt="avatar-channel" alt="avatar-channel" />
                              </div>
                            </div>
                            <div className="sub-child-list-member__title">
                              Mai
                            </div>
                          </div>
                          <div className="sub-child-list-member__block-item">
                            <div className="avatar-channel-wraper">
                              <div>
                                <Avatar size={50} src="https://cache.giaohangtietkiem.vn/d/4928670cb6b84ad795f3916002df9abc.jpg?width=125" alt="avatar-channel" alt="avatar-channel" />
                              </div>
                            </div>
                            <div className="sub-child-list-member__title">
                              Nga
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-menu-item sub-menu-item__wrapper__disable">
                    <span className="sub-menu-item__left-icon">
                      <svg width="16" height="19" viewBox="0 0 19 21" fill="none">
                        <path d="M7 12.4503C7.32361 12.894 7.73648 13.2612 8.21061 13.5269C8.68473 13.7926 9.20902 13.9505 9.74791 13.9901C10.2868 14.0297 10.8277 13.95 11.3339 13.7563C11.8401 13.5626 12.2998 13.2596 12.6817 12.8677L14.9424 10.549C15.6287 9.82019 16.0084 8.84404 15.9999 7.83081C15.9913 6.81758 15.595 5.84834 14.8965 5.13185C14.1979 4.41536 13.2529 4.00895 12.265 4.00015C11.2771 3.99134 10.3254 4.38085 9.6148 5.08478L8.3187 6.4064" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                        <path d="M10 10.5497C9.67639 10.106 9.26352 9.73881 8.78939 9.47313C8.31527 9.20745 7.79098 9.04946 7.25209 9.00987C6.7132 8.97029 6.17231 9.05004 5.66611 9.24371C5.15991 9.43738 4.70024 9.74045 4.31828 10.1323L2.05764 12.451C1.37132 13.1798 0.991558 14.156 1.00014 15.1692C1.00873 16.1824 1.40497 17.1517 2.10354 17.8681C2.80211 18.5846 3.7471 18.991 4.73498 18.9999C5.72287 19.0087 6.6746 18.6192 7.3852 17.9152L8.67376 16.5936" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                      </svg>
                    </span>
                    <div className="sub-menu-item__block">
                      <div className="sub-menu-item__content">
                        <span>
                          Mời tham gia nhóm theo liên kết
                        </span>
                        <span className="sub-menu-item__right-icon">
                          <span>
                            <span>
                              Tắt
                            </span>
                            <span role="img" aria-label="right" className="anticon anticon-right">
                              <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                                </path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div className="sub-menu-item__sub-content">
                      </div>
                    </div>
                  </div>
                </div>
              </> : <>
                <div className="sub-menu-item">
                  <span className="sub-menu-item__left-icon">
                    <svg width="17" height="17" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" >
                      <g>
                        <g>
                          <path d="M469.333,64H42.667C19.135,64,0,83.135,0,106.667v298.667C0,428.865,19.135,448,42.667,448h426.667 C492.865,448,512,428.865,512,405.333V106.667C512,83.135,492.865,64,469.333,64z M42.667,85.333h426.667 c1.572,0,2.957,0.573,4.432,0.897c-36.939,33.807-159.423,145.859-202.286,184.478c-3.354,3.021-8.76,6.625-15.479,6.625 s-12.125-3.604-15.49-6.635C197.652,232.085,75.161,120.027,38.228,86.232C39.706,85.908,41.094,85.333,42.667,85.333z  M21.333,405.333V106.667c0-2.09,0.63-3.986,1.194-5.896c28.272,25.876,113.736,104.06,169.152,154.453 C136.443,302.671,50.957,383.719,22.46,410.893C21.957,409.079,21.333,407.305,21.333,405.333z M469.333,426.667H42.667 c-1.704,0-3.219-0.594-4.81-0.974c29.447-28.072,115.477-109.586,169.742-156.009c7.074,6.417,13.536,12.268,18.63,16.858 c8.792,7.938,19.083,12.125,29.771,12.125s20.979-4.188,29.76-12.115c5.096-4.592,11.563-10.448,18.641-16.868 c54.268,46.418,140.286,127.926,169.742,156.009C472.552,426.073,471.039,426.667,469.333,426.667z M490.667,405.333 c0,1.971-0.624,3.746-1.126,5.56c-28.508-27.188-113.984-108.227-169.219-155.668c55.418-50.393,140.869-128.57,169.151-154.456 c0.564,1.91,1.194,3.807,1.194,5.897V405.333z">
                          </path>
                        </g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                    </svg>
                  </span>
                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        Mail chung
                      </span>
                      <span className="sub-menu-item__right-icon">
                        <span role="img" aria-label="right" className="anticon anticon-right">
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                            </path>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>
                <div className="sub-menu-item">
                  <span className="sub-menu-item__left-icon">
                    <svg width="16" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M12.7002 15V13.3333C12.7002 12.4493 12.3841 11.6014 11.8215 10.9763C11.2589 10.3512 10.4958 10 9.7002 10H3.7002C2.90455 10 2.14148 10.3512 1.57888 10.9763C1.01627 11.6014 0.700195 12.4493 0.700195 13.3333V15" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                      <path d="M6.5 7C8.15685 7 9.5 5.65685 9.5 4C9.5 2.34315 8.15685 1 6.5 1C4.84315 1 3.5 2.34315 3.5 4C3.5 5.65685 4.84315 7 6.5 7Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                      <path d="M17 15V13.2964C16.9996 12.5415 16.8029 11.8082 16.4409 11.2115C16.0789 10.6149 15.5721 10.1887 15 10" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                      <path d="M12 1C12.5721 1.17056 13.0792 1.55796 13.4413 2.10114C13.8034 2.64432 14 3.31238 14 4C14 4.68762 13.8034 5.35567 13.4413 5.89886C13.0792 6.44204 12.5721 6.82944 12 7" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                    </svg>
                  </span>
                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        <div>
                          <span>
                            Nhóm chung
                          </span>
                          <button type="button" className="ant-btn ant-btn-sm sub-menu-item__btn">
                            <span>
                              +Tạo
                            </span>
                          </button>
                        </div>
                      </span>
                      <span className="sub-menu-item__right-icon">
                        <span>
                          <span>
                            3
                          </span>
                          <span role="img" aria-label="right" className="anticon anticon-right">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                              </path>
                            </svg>
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>


              </>}
            </div>

            <div className="channel-info-block">
              <div className="sub-menu-item">
                <span className="sub-menu-item__left-icon">
                  <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
                    <path d="M7.4995 18.1648C5.94851 18.1648 4.68701 16.9033 4.68701 15.3523C4.68701 15.0418 4.93901 14.7898 5.24951 14.7898C5.56001 14.7898 5.81201 15.0418 5.81201 15.3523C5.81201 16.2831 6.56883 17.0398 7.4995 17.0398C8.43032 17.0398 9.187 16.2831 9.187 15.3523C9.187 15.0418 9.439 14.7898 9.7495 14.7898C10.06 14.7898 10.312 15.0418 10.312 15.3523C10.312 16.9033 9.05049 18.1648 7.4995 18.1648Z" fill="black">
                    </path>
                    <path d="M13.6874 15.9126H1.31245C0.588728 15.9126 0 15.3238 0 14.6001C0 14.216 0.167266 13.8524 0.458952 13.6026C1.59974 12.6388 2.24999 11.2379 2.24999 9.75364V7.66254C2.24999 4.76765 4.60504 2.4126 7.49993 2.4126C10.395 2.4126 12.75 4.76765 12.75 7.66254V9.75364C12.75 11.2379 13.4003 12.6388 14.5335 13.5973C14.8327 13.8524 15 14.216 15 14.6001C15 15.3238 14.4113 15.9126 13.6874 15.9126ZM7.49993 3.53759C5.22522 3.53759 3.37499 5.38782 3.37499 7.66254V9.75364C3.37499 11.5693 2.57931 13.2838 1.19256 14.456C1.1662 14.4786 1.125 14.5251 1.125 14.6001C1.125 14.702 1.21055 14.7876 1.31245 14.7876H13.6874C13.7894 14.7876 13.875 14.702 13.875 14.6001C13.875 14.5251 13.8337 14.4786 13.8089 14.4576C12.4207 13.2838 11.625 11.5693 11.625 9.75364V7.66254C11.625 5.38782 9.77478 3.53759 7.49993 3.53759Z" fill="black">
                    </path>
                    <path d="M7.50049 3.53905C7.18999 3.53905 6.93799 3.28705 6.93799 2.97655V0.726561C6.93799 0.416061 7.18999 0.164062 7.50049 0.164062C7.81099 0.164062 8.06298 0.416061 8.06298 0.726561V2.97655C8.06298 3.28705 7.81099 3.53905 7.50049 3.53905Z" fill="black">
                    </path>
                  </svg>
                </span>
                <div className="sub-menu-item__block">
                  <div className="sub-menu-item__content">
                    <span>
                      Thông báo
                    </span>
                    <span className="sub-menu-item__right-icon">
                      <Switch defaultChecked onChange={onChange} />
                    </span>
                  </div>
                  <div className="sub-menu-item__sub-content">
                  </div>
                </div>
              </div>
              <div className="sub-menu-item">
                <span className="sub-menu-item__left-icon">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path d="M11.6201 13.3313L11.2987 13.7143L11.6817 14.0357C12.0953 14.3827 12.3301 14.9183 12.3093 15.7426C12.2885 16.5637 12.0241 17.2681 11.5141 17.8758L11.514 17.8758C11.4789 17.9177 11.4421 17.9397 11.3714 17.9458L11.3708 17.9458C11.3007 17.952 11.2603 17.9368 11.2182 17.9014L7.57293 14.8427L7.22822 14.5534L6.90437 14.8659L3.8048 17.8563L6.0569 14.1222L6.27782 13.7559L5.95014 13.4809L2.5173 10.6004C2.47537 10.5652 2.45324 10.5283 2.44693 10.4575C2.44073 10.3868 2.45603 10.3467 2.49121 10.3047C3.00135 9.69679 3.64896 9.31399 4.45387 9.15096C5.26194 8.98737 5.83028 9.12554 6.24377 9.4725L6.6268 9.79389L6.94819 9.41087L10.5987 5.06033L10.9201 4.67731L10.5371 4.35591C10.3478 4.1971 10.2434 3.99942 10.2199 3.73073C10.1964 3.46201 10.2648 3.2493 10.4237 3.05999C10.5826 2.87064 10.7801 2.76636 11.0488 2.74287L11.0489 2.74287C11.3176 2.71935 11.5303 2.78777 11.7196 2.94661L17.1577 7.50967C17.347 7.66854 17.4514 7.86634 17.4747 8.13443L17.4747 8.13494C17.4983 8.40384 17.4299 8.61654 17.2712 8.80574C17.1125 8.99483 16.9148 9.09923 16.6459 9.12265L16.6454 9.1227C16.3774 9.14631 16.1645 9.07785 15.9751 8.91897L15.5921 8.59757L15.2707 8.9806L11.6201 13.3313Z" stroke="black">
                    </path>
                  </svg>
                </span>
                <div className="sub-menu-item__block">
                  <div className="sub-menu-item__content">
                    <span>
                      Ghim chat
                    </span>
                    <span className="sub-menu-item__right-icon">
                      <Switch defaultChecked onChange={onChange} />
                    </span>
                  </div>
                  <div className="sub-menu-item__sub-content">
                  </div>
                </div>
              </div>
              <div className="sub-menu-item">
                <span className="sub-menu-item__left-icon">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <g clipPath="url(#clip0)">
                      <path d="M16.6935 6.86531L15.8156 6.71645C15.7375 6.49892 15.6492 6.28551 15.5516 6.078L16.0685 5.35483C16.5182 4.72298 16.446 3.86961 15.8985 3.32744L14.8436 2.27248C14.5455 1.97433 14.1503 1.81009 13.7309 1.81009C13.4006 1.81009 13.0847 1.91185 12.8197 2.1026L12.0938 2.61964C11.8692 2.51349 11.6414 2.41969 11.412 2.33867L11.2669 1.47858C11.1392 0.716812 10.4858 0.164062 9.71315 0.164062H8.22285C7.45038 0.164062 6.79697 0.716812 6.66953 1.47707L6.51695 2.3708C6.30148 2.44949 6.08904 2.53889 5.88098 2.63873L5.16824 2.1254C4.901 1.933 4.58391 1.83138 4.25116 1.83138C3.82764 1.83138 3.43227 1.9959 3.13742 2.29472L2.08012 3.34859C1.5341 3.89461 1.46255 4.74728 1.91011 5.37598L2.43539 6.11398C2.33858 6.32231 2.25151 6.53668 2.17461 6.75545L1.31438 6.9006C0.55275 7.02846 0 7.68187 0 8.45435V9.94464C0 10.7171 0.55275 11.3705 1.313 11.4981L2.20674 11.6505C2.28543 11.8661 2.37497 12.0787 2.47467 12.2867L1.96326 12.998C1.5135 13.6299 1.58574 14.4834 2.13327 15.0254L3.1881 16.0804C3.48624 16.3785 3.88147 16.5428 4.30087 16.5428C4.63115 16.5428 4.94701 16.441 5.21191 16.2504L5.94992 15.7251C6.14383 15.8152 6.34488 15.8977 6.55128 15.972L6.69754 16.8497C6.82539 17.6113 7.47881 18.1641 8.25128 18.1641H9.74501C10.5175 18.1641 11.171 17.6113 11.2986 16.8506L11.4475 15.9727C11.665 15.8946 11.8784 15.8063 12.0859 15.7086L12.8068 16.2239C13.074 16.4163 13.3911 16.518 13.7238 16.518C14.1431 16.518 14.5383 16.3538 14.8365 16.0556L15.8913 15.0007C16.4375 14.4547 16.5089 13.602 16.0613 12.9733L15.5439 12.2467C15.6441 12.0344 15.7327 11.8211 15.8089 11.6091L16.6855 11.463C17.4471 11.3351 17.9999 10.6817 17.9999 9.90921V8.42194C18.0085 7.64864 17.4597 6.9944 16.6935 6.86531ZM16.9452 9.90921C16.9452 10.1645 16.7625 10.3805 16.5115 10.4227L15.3489 10.6165C15.1344 10.6522 14.9613 10.8035 14.8969 11.0116C14.7936 11.3462 14.6518 11.6883 14.4756 12.0278C14.3759 12.2192 14.3918 12.4473 14.5171 12.6228L15.2022 13.585C15.35 13.7926 15.3262 14.0744 15.1456 14.255L14.0908 15.3098C13.9904 15.4102 13.8635 15.4633 13.7238 15.4633C13.6137 15.4633 13.5098 15.4304 13.4216 15.3669L12.4636 14.6822C12.2874 14.5557 12.0583 14.5398 11.8659 14.6405C11.5437 14.8091 11.2014 14.951 10.8483 15.0618C10.6423 15.1263 10.4919 15.2988 10.4561 15.5111L10.2586 16.675C10.2165 16.9267 10.0004 17.1094 9.74501 17.1094H8.25128C7.99585 17.1094 7.77997 16.9267 7.73781 16.6757L7.54404 15.5131C7.50861 15.2999 7.35864 15.1272 7.15265 15.0621C6.80466 14.9522 6.47328 14.816 6.16745 14.6571C6.08409 14.6138 5.99387 14.5925 5.90405 14.5925C5.78787 14.5925 5.67224 14.6283 5.57323 14.6987L4.59805 15.3928C4.51016 15.4561 4.41019 15.4881 4.30087 15.4881C4.16121 15.4881 4.03432 15.4351 3.93393 15.3345L2.87718 14.2779C2.69687 14.0994 2.67393 13.8184 2.82101 13.6117L3.50203 12.6644C3.63016 12.4866 3.64581 12.2559 3.54254 12.0618C3.36937 11.7371 3.22586 11.3965 3.11586 11.0495C3.05077 10.8448 2.87897 10.6953 2.66748 10.6592L1.48892 10.4583C1.23734 10.416 1.05469 10.1999 1.05469 9.94464V8.45435C1.05469 8.19905 1.23734 7.98303 1.48933 7.94073L2.63768 7.74696C2.85233 7.71085 3.02522 7.5591 3.08908 7.35036C3.19743 6.99577 3.33682 6.65286 3.5034 6.33151C3.60255 6.14049 3.58662 5.91293 3.46179 5.73729L2.76938 4.76445C2.62148 4.55681 2.64523 4.27501 2.82527 4.09497L3.88367 3.04015L3.88751 3.03616C3.98268 2.93935 4.11177 2.88606 4.25116 2.88606C4.3613 2.88606 4.46539 2.91902 4.55191 2.98137L5.50333 3.66623C5.68144 3.79449 5.91243 3.80988 6.10579 3.7066C6.43057 3.53343 6.77115 3.38992 7.11777 3.28006C7.32239 3.2151 7.47194 3.04358 7.50833 2.83154L7.70938 1.65298C7.75154 1.4014 7.96756 1.21875 8.22299 1.21875H9.71329C9.96858 1.21875 10.1846 1.4014 10.2269 1.6534L10.4207 2.80215C10.4569 3.01694 10.6089 3.1897 10.8178 3.25342C11.1739 3.36163 11.5291 3.50775 11.8736 3.68793C12.065 3.7879 12.2932 3.77225 12.4695 3.64687L13.4338 2.96008C13.5216 2.89677 13.6215 2.86478 13.731 2.86478C13.8705 2.86478 13.9974 2.91779 14.0979 3.01831L15.1545 4.07492C15.3349 4.25345 15.3579 4.53442 15.2099 4.7422L14.5245 5.70117C14.3987 5.8775 14.383 6.10629 14.4834 6.298C14.6522 6.62018 14.7939 6.96254 14.9049 7.31575C14.9696 7.52174 15.1419 7.67198 15.3542 7.70782L16.5171 7.90517L16.5181 7.9053C16.769 7.94746 16.9487 8.16032 16.9452 8.4115V9.90921Z" fill="black">
                      </path>
                      <path d="M9.00018 5.66455C7.07043 5.66455 5.50049 7.2345 5.50049 9.16425C5.50049 11.094 7.07043 12.6639 9.00018 12.6639C10.9299 12.6639 12.4999 11.094 12.4999 9.16425C12.4999 7.2345 10.9299 5.66455 9.00018 5.66455ZM9.00018 11.6093C7.65202 11.6093 6.55518 10.5124 6.55518 9.16425C6.55518 7.81609 7.65202 6.71924 9.00018 6.71924C10.3483 6.71924 11.4452 7.81609 11.4452 9.16425C11.4452 10.5124 10.3483 11.6093 9.00018 11.6093Z" fill="black">
                      </path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="18" height="18" fill="white" transform="translate(0 0.164062)">
                        </rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="sub-menu-item__block">
                  <div className="sub-menu-item__content">
                    <span>
                      Cài đặt cá nhân
                    </span>
                    <span className="sub-menu-item__right-icon">
                      <span role="img" aria-label="right" className="anticon anticon-right">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                          </path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="sub-menu-item__sub-content">
                  </div>
                </div>
              </div>
            </div>

            <div className="channel-info-block">
              {channelInfo.channel_type == "group" ? <>
                <div className="sub-menu-item">
                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        <span style={{ color: 'rgb(235, 87, 87)' }}>
                          Xóa chat
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>
                <div className="sub-menu-item">
                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        <span style={{ color: 'rgb(235, 87, 87)' }}>
                          Rời khỏi nhóm
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>

              </> : <>
                <div className="sub-menu-item">

                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        <span style={{ color: 'black' }}>
                          Chia sẻ liên hệ
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>
                <div className="sub-menu-item">

                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        <span style={{ color: 'rgb(235, 87, 87)' }}>
                          Chặn người này
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>
                <div className="sub-menu-item">
                  <div className="sub-menu-item__block">
                    <div className="sub-menu-item__content">
                      <span>
                        <span style={{ color: 'rgb(235, 87, 87)' }}>
                          Xóa chat
                        </span>
                      </span>
                    </div>
                    <div className="sub-menu-item__sub-content">
                    </div>
                  </div>
                </div>
              </>}
            </div>

          </div>
        </div>
      </div>
    </>
  )

};

export default ChatViewInfor;