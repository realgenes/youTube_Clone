import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
} from "react-icons/md"; // added icons

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="bg-white shadow-lg col-span-3 w-60 h-full p-4">
      

      {/* Navigation Section */}
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
          <MdHome size={24} />
          <Link to="/">Home</Link>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
          <MdVideoLibrary size={24} />
          <span>Library</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
          <MdHistory size={24} />
          <span>History</span>
        </li>
      </ul>

      {/* Subscriptions Section */}
      <div className="mt-6">
        <h1 className="font-semibold text-gray-700 mb-3">Subscriptions</h1>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
            <MdSubscriptions size={24} />
            <span>Music</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
            <MdSubscriptions size={24} />
            <span>Sports</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
            <MdSubscriptions size={24} />
            <span>Gaming</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded">
            <MdSubscriptions size={24} />
            <span>Movies</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
