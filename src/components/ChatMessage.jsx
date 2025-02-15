import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const ChatMessage = ({name,message}) => {
  return (
    <div>
      
      <div className="flex items-center shadow-md p-2 mx-2 rounded-md bg-white mb-3 pb-3 transform scale-x-95">
        <FontAwesomeIcon icon={faUser} className="text-xl  ml-2 pr-2" />
        <span className="font-semibold text-xl px-1.5">{name}</span>
        <span>{message}</span>
      </div>

      
    </div>
  );
};

export default ChatMessage;
