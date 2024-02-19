const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img
        className="h-10"
        alt="user-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
