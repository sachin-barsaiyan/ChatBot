import React, { useRef, useState } from "react";
import { ChatBotContainer } from "./ChatBot.styles";
import { Button, Input, Menu, Upload, message } from "antd";
import { UploadIcon } from "../Asset/upload";

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Store chat messages
  const [userInput, setUserInput] = useState(""); // Store user input
  const [backgroundImage, setBackgroundImage] = useState(""); // Store background image URL
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store uploaded files
  const lastMessageRef = useRef(null);
  // Function to handle user input
  const handleUserInput = (e) => {
    console.log(e, "vent");
    setUserInput(e.target.value);
  };
  // Function for bot message
  const botMessage = () => {
    const greeting = ["hello", "hi", "hey"];
    const greeting2 = ["how are you"];
    const bye = ["bye"];
    console.log(
      userInput?.toLowerCase()?.includes("hello", "hi", "hey"),
      "is there"
    );
    return greeting?.includes(userInput)
      ? "Hello, I am your chatbot!"
      : greeting2?.includes(userInput)
      ? "I'm doing great"
      : bye?.includes(userInput)
      ? "Bye Bye!"
      : "Sorry I can't Understand your message!";
  };

  // Function to send a message
  const sendMessage = () => {
    if (userInput.trim() !== "") {
      // Add user message to the chat
      const newMessages = [...messages, { text: userInput, sender: "user" }];
      setMessages(newMessages);
      setUserInput("");

      // Simulate a bot response (you would replace this with actual bot logic)
      setTimeout(() => {
        const botResponse = {
          text: botMessage(),
          sender: "bot",
        };
        setMessages([...newMessages, botResponse]);
      }, 1000);
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Function to handle file uploads (audio and video)
  // Current we don't have server to upload it on
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can add more checks here for file type and size
      const newUploadedFiles = [...uploadedFiles, file];
      setUploadedFiles(newUploadedFiles);

      // Optionally, you can upload the file to a server here
    }
  };
  const restart = () => {
    setMessages([]);
  };
  return (
    <ChatBotContainer>
      <div className="chatbot-container">
        <div className="header">
          <div className="bot-details">
            <div className="bot-logo">
              <img
                src="https://bot.textbase.ai/avatars/0.png"
                className="logo"
              />
              <div className="status" />
            </div>
            <div className="bot-name">Chat Bot</div>
          </div>
          <Menu theme="light" mode="horizontal" className="menu-items">
            <Menu.SubMenu key="submenu" title="...">
              <Menu.Item onClick={restart}>Restart</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
        <div className="message-container">
          {messages?.length > 0 ? (
            messages?.map((item, index) => {
              return (
                <div
                  className="message-holder"
                  key={index}
                  ref={index === messages?.length - 1 ? lastMessageRef : null}
                >
                  <div
                    className={`chat ${
                      item?.sender === "bot" ? "user1" : "user2"
                    }`}
                  >
                    {item?.text}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="start-chat">
              <span>Start Conversation with bot</span>
            </div>
          )}
        </div>
        <div className="footer">
          <Input
            type="text"
            className="message-writing-box"
            placeholder="Chat With Bot"
            value={userInput}
            onChange={handleUserInput}
            onPressEnter={sendMessage}
          />
          <Upload className="upload">
            <UploadIcon />
          </Upload>
          <Button
            className="send-button"
            disabled={userInput === "" ? true : false}
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </ChatBotContainer>
  );
};

export default Chatbot;
