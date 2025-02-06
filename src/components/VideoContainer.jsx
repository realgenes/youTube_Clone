import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YoutubeApi } from "../../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YoutubeApi);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className=" flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}> <VideoCard key={video.id} info={video} /></Link>
       
      ))}
    </div>
  );
};

export default VideoContainer;
