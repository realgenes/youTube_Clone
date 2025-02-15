import React from "react";

const VideoCard = ({ info }) => {
  const { snippet = {}, statistics = {} } = info;
  const { channelTitle, title, thumbnails = {} } = snippet;

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    } else {
      return count;
    }
  };

  return (
    <div className=" m-2 w-96  rounded-2xl h-[380px] transform scale-95 hover:scale-98 transition-transform duration-200 hover:shadow">
      <img
        src={thumbnails.high?.url}
        alt=""
        className="rounded-2xl h-[215px] w-full object-cover"
      />

      <ul className="pl-3">
        <li className="font-semibold py-2 text-lg text-gray-900">
          <div className="line-clamp-2">{title}</div>
        </li>
        <li className="font-semibold text-gray-800 text-lg">{channelTitle}</li>
        <li className="text-gray-800">
          {formatCount(statistics.viewCount)} views
        </li>
        <li className="text-gray-800">
          {formatCount(statistics.likeCount)} likes
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
