import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchVideoContainer = () => {
  const searchvideo = useSelector((store) => store.app.searchvideos);
  return (
    <div className="flex flex-wrap">
      {searchvideo.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;
