import { useEffect, useRef, useState } from "react";
import "./index.css";

import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { generateResponse } from "./utils/responseHandler";


const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();
    useEffect(() => {
    fetch("/hardcodedResponses.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded JSON from public:", data);
      });
  }, []);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    const lastUserMessage = history
      .filter((msg) => msg.role === "user")
      .pop()?.text;

    if (!lastUserMessage) return;

    setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);

    const botReply = await generateResponse(lastUserMessage);
    await new Promise((r) => setTimeout(r, 300)); // Delay for smooth UX

    updateHistory(botReply);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Campus Bot</h2>
          </div>
        </div>

        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there.
              <br />
              How can I help you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
