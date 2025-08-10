import ChatbotIcon from "./ChatbotIcon";
const ChatMessage = ({chat}) => {
  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && <ChatbotIcon />}
        <p className="message-text">
  {chat.text.split("\n").map((line, idx) => (
    <span key={idx}>
      {line}
      <br />
    </span>
  ))}
</p>
     </div>
  );
};

export default ChatMessage;