import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DiamondIcon from "@mui/icons-material/Diamond";
import profile from "../assets/profile.jpeg";

const SidebarProfile = () => {
  return (
    <div className="bg-white rounded-md drop-shadow mb-5 object-right-top">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-t-md h-24 mb-12">
        <img
          src={profile}
          alt="Profile pic"
          className="rounded-full w-24 relative top-2 border-4 border-white"
        />
      </div>
      <div className="px-8 mb-5">
        <div className="mb-6">
          <h3 className="font-bold text-md mb-1">Jane Doe</h3>
          <p className="text-gray-500 font-medium text-xs">UX/UI Designer</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700 text-sm">Profile views</p>
          <p className="text-blue-600 text-sm font-semibold">52</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700 text-sm">Connections</p>
          <p className="text-blue-600 text-sm font-semibold">203</p>
        </div>
      </div>
      <div className="flex border-2 border-gray-100">
        <span className="flex flex-1 items-center justify-center border-right">
          <BookmarkBorderIcon className="text-blue-600 w-1" />
          <p className="m-2 text-sm font-medium">Bookmark</p>
        </span>
        <span className="flex flex-1 items-center justify-center p-2">
          <DiamondIcon className="text-blue-600 w-1" />
          <p className="m-2 text-sm font-medium">Premium</p>
        </span>
      </div>
    </div>
  );
};

export default SidebarProfile;
