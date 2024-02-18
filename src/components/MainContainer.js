import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import SearchVideoContainer from "./SearchVideoContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const showSearchScreen = useSelector((store) => store.app.isShowSearchVideos);

  return (
    <div>
      <ButtonList />
      {showSearchScreen ? <SearchVideoContainer /> : <VideoContainer />}
    </div>
  );
};

export default MainContainer;
