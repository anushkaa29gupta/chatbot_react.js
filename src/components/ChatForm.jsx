import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    // Add user's message
    const updatedHistory = [
      ...chatHistory,
      { role: "user", text: userMessage },
      { role: "model", text: "Thinking..." }
    ];

    // Set updated history with "Thinking..." message
    setChatHistory(updatedHistory);

    // Slight delay for realism
    setTimeout(() => {
      generateBotResponse(updatedHistory);
    }, 600);
  };

  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input
        type="text"
        ref={inputRef}
        placeholder="Type your message..."
        className="message-input"
        required
      />
      <button type="submit" className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
