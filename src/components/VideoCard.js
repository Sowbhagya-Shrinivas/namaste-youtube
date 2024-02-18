const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className=" rounded-lg"
        alt="img"
        src={info?.snippet?.thumbnails?.high?.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

//HigherOrder Component
export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
