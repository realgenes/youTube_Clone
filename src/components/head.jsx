import React from "react";
import menuIcon from "../assets/download.png";
import youtubeLogo from "../assets/youtube.png";
import userIcon from "../assets/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5  shadow-lg">
      <div className="flex col-span-1">
        <img src={menuIcon} alt="menu" className="h-8" onClick={toggleMenuHandler} />
        <img src={youtubeLogo} alt="logo" className="h-7 mx-3" />
      </div>

      <div className="col-span-10  text-center">
        <input
          type="text"
          className="w-1/2  border border-gray-400 p-1.5 rounded-l-full"
        />
        <button className="border border-gray-400 p-1.5 rounded-r-full bg-gray-300">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img src={userIcon} alt="user" className="h-8" />
      </div>
    </div>
  );
};

export default Head;
