import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col-reverse overflow-y-scroll bg-slate-100 rounded-lg h-[600px] ml-2 p-2 border border-black">
        <div>
          {chatMessages.map((c, idx) => (
            <ChatMessage key={idx} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black rounded-lg" 
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Sowbhagya Shrinivas",
            message: liveMessage,
        }));
        setLiveMessage("");
      }}>  
        <input
          className="px-2 w-80 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
