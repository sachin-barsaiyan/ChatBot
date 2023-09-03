import { styled } from "styled-components";

export const ChatBotContainer = styled.div`
  /* Add your CSS styling for the chatbot component here */
  background: linear-gradient(to right, #f59e0b, #ec4899);
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: #ffffff;
  .chatbot-container {
    background-color: black;
    border-radius: 14px;
    height: 85vh;
    width: 50vw;
    margin: auto;
    position: relative;
    .header {
      background-color: #141414;
      width: 100%;
      height: 70px;
      border-top-right-radius: 14px;
      border-top-left-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .bot-details {
        display: flex;
        align-items: center;
        gap: 10px;
        .bot-logo {
          position: relative;
          margin-left: 20px;
          height: 40px;
          width: 40;
          border: 1px solid green;
          border-radius: 50%;
          padding: 4px;
          .logo {
            height: 94%;
            width: 94%;
          }
          .status {
            position: absolute;
            bottom: 2px;
            right: -2px;
            border-radius: 50%;
            background-color: green;
            height: 10px;
            width: 10px;
          }
        }
        .bot-name {
          font-size: 18px;
          font-weight: 700;
        }
      }
      .menu-items {
        width: 50px;
        margin-right: 20px;
        background-color: transparent;
        color: white;
        border: none;
        font-size: 18px;
        font-weight: 700;
      }
      .ant-menu-item::after {
        border-bottom: none !important;
      }
      .ant-menu-item:hover {
        border-bottom: none !important;
      }
      .ant-menu-submenu::after {
        border-bottom: none !important;
      }
      .ant-menu-submenu-selected > .ant-menu-submenu-title {
        color: grey !important;
      }
    }
  }
  .message-container {
    display: flex;
    flex-direction: column;
    max-height: 350px;
    overflow: auto;
    padding: 5px 5px 0px 5px;
    padding-bottom: 95px;
    .message-holder {
      margin-bottom: 5px;
      .chat {
        padding: 10px;
        border: 2px solid #ccc;
      }
      .user1 {
        background-color: grey;
        border-color: gray;
        float: left;
        border-radius: 0px 10px 10px 10px;
      }
      .user2 {
        background-color: gray;
        float: right;
        border-radius: 10px 0px 10px 10px;
      }
    }
    .start-chat {
      display: flex;
      height: 400px;
      align-items: center;
      justify-content: center;
      font-weight: 400px;
      font-size: 18px;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .footer {
    position: absolute;
    bottom: 0;
    background-color: #141414;
    width: 100%;
    height: 70px;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .message-writing-box {
      margin-left: 10px;
      width: 80%;
      height: 62%;
      border: none;
      background-color: black;
      border-radius: 28px;
      color: white;
      padding-left: 20px;
    }
    ::placeholder {
      color: white;
    }
    .upload {
      cursor: pointer;
    }
    .send-button {
      margin-right: 10px;
      background-color: white;
      height: 40px;
      border-radius: 24px;
      width: 100px;
      span {
        font-weight: 600;
        font-size: 18px;
      }
      :hover {
        color: grey !important;
      }
    }
  }
`;
