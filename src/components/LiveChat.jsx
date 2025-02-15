import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomName } from "../../utils/helper";
import { randomPara } from "../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling -
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomPara(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full  rounded-lg border-slate-200 border-2 bg-slate-50 ">
      <div className=" shadow-amber-300 flex justify-between p-3 rounded-t-lg  ">
        <div>
          <p className="text-xl font-semibold">Live Chat</p>
        </div>
        <div className=" text-2xl">
          <FontAwesomeIcon icon={faEllipsisVertical} className="mx-3 " />
          <FontAwesomeIcon icon={faXmark} className="mx-2" />
        </div>
      </div>

      <div className="p-2  h-[450px] overflow-y-scroll flex flex-col-reverse ">
        {Array.isArray(chatMessages) &&
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
      </div>

      <div className=" shadow-amber-300 flex justify-between p-3 rounded-t-lg  ">
        <div>
          <p className="text-xl ">Subscribers Only mode</p>
        </div>
        <div className=" text-2xl">
          <FontAwesomeIcon icon={faCommentDollar}  className="mx-3"/>
          <FontAwesomeIcon icon={faHeart} className="mx-3" />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
