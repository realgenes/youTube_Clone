import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../../utils/appSlice";
import CommentContainer from "../components/CommentContainer";
import LiveChat from "../components/LiveChat";

const watchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-12 gap-4 m-2">
        {/* Left Section */}
        <div className="col-span-8">
          <iframe
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg w-full h-[450px] object-cover"
          ></iframe>
         
          
          {/* Comments Section */}
          <CommentContainer />
        </div>

        {/* Right Section: Recommended Videos / Live Chat */}
        <div className="col-span-4">
          <LiveChat />
          {/* Optionally, add a RecommendedVideos component here */}
        </div>
      </div>
    </div>
  );
};

export default watchPage;
