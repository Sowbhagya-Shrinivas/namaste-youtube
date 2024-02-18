import { useDispatch, useSelector } from "react-redux";
import { searchVideo, toggleMenu, toggleSearchScreen } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_BY_KEYWORD_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    handleSearchVideo();
  },[]);

  const handleSearchVideo = async() => {
     const data = await fetch(YOUTUBE_SEARCH_BY_KEYWORD_API + searchQuery);
     const json = await data.json();
     dispatch(searchVideo(json.items));
     dispatch(toggleSearchScreen());
  }

  useEffect(() => {
    // make API call after every key press but if the diff between 2 API call < 200ms then DECLINE API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   *  - render the component
   *  - useEffect();
   *  - start timer make api call after 200ms
   *
   * key - ip
   *  - destroy component(useEffect return method) <before 200ms>
   *  - render  the component
   *  - useEffect()
   *  - start timer make api call after 200ms (new timer)
   *  - make API call after 2000ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-9 cursor-pointer"
          alt="menu"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABKAFYDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBv/EACcQAAECBAUEAwEAAAAAAAAAAAACBAEDERIFFlSj0RUhMVUUYaRR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzAAAAAAAAAAAAAAAAAAAGLxpJfNlt3KL5S6XJrGFaRr5h9wJmVMF0W6vkCyCNlTBdFur5GVMF0W6vkCyCNlTBdFur5KbNpJYtkN2yLJSK2prGNKxr5j9xA2AAAAAAABi8mTpLZa2zf5E2FLZV8EXd/7Hx27kzqWNeh/YjgsgCN1LGvQ/sRwOpY16H9iOCyAI3Usa9D+xHBTZzJ05shblv8ebGt0q+C7e/9h57dzYAAAAAAAAAYvGkl82W3covlLpcmsYVpGvmH3AmZUwXRbq+SyAI2VMF0W6vkZUwXRbq+SyAI2VMF0W6vkps2kli2Q3bIslIramsY0rGvmP3E2AAAAAAAAAAAAAAAAAAAAAAB/9k="
        />
        <a href="/">
          <img
            className="h-9 w-[60%] mx-2"
            alt="youtube-logo"
            src="data:image/jpeg;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-40">
        <div>
          <input
            className="w-1/2 border border-gray-600 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 py-2 px-5 bg-gray-100 rounded-r-full" onClick={handleSearchVideo}>
            🔍 
          </button>
        </div>
        {showSuggestions && <div className="fixed shadow-lg rounded-lg border border-gray-100 bg-white py-2 px-5 w-[37rem]">
          <ul>
            {suggestions.map((suggest) => (
              <li key={suggest} className="py-2 hover:bg-gray-100">
                {suggest}
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
        />
      </div>
    </div>
  );
};

export default Head;
