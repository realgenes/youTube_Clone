import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import youtubeLogo from "../assets/youtube.png";
import userIcon from "../assets/user.png";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { cacheResults } from "../../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // new state

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
        setSuggestions([]); // Clear suggestions when input is empty
        setShowSuggestions(false); // Hide suggestions when input is empty
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]); // Assuming json[1] contains suggestions
    setShowSuggestions(true); // Show suggestions after fetching
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5">
      <div className="flex col-span-1">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl font-light mr-2"
          onClick={toggleMenuHandler}
          cursor={"pointer"}
        />
        <img src={youtubeLogo} alt="logo" className="h-7 mx-3" />
      </div>

      <div className="col-span-10 text-center flex flex-col">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-1.5 px-3.5 rounded-l-full focus:border-blue-500 focus:outline-none focus:border-2"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Hide suggestions on blur with a delay
          />
          <button className="border border-gray-400 p-1.5 rounded-r-full bg-gray-300">
            Search
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="bg-white border border-gray-300 rounded-lg shadow-md min-w-sm w-36/100 mx-auto mt-2 absolute top-15 left-30 right-7 z-50">
            <ul className="flex flex-col justify-start py-3 px-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-1 px-4 border my-1  border-gray-100 hover:bg-gray-100 rounded-lg cursor-pointer flex ease-linear duration-75"
                  onClick={() => {
                    setSearchQuery(suggestion); // Set input value on click
                    setShowSuggestions(false); // Hide suggestions after click
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="mx-2 font-extralight py-1"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img src={userIcon} alt="user" className="h-8" />
      </div>
    </div>
  );
};

export default Head;
