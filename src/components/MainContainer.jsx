import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux"; // added import

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Example: use scale-110 when sidebar is hidden, else normal scale
    const scalingClass = !isMenuOpen ? "scale-100.5" : "scale-100";

  return (
    <div
      className={`col-span-9 transition-transform duration-300 ${scalingClass}`}
    >
      <ButtonList />
      <div className="">
        <VideoContainer  />
      </div>
    </div>
  );
};

export default MainContainer;
