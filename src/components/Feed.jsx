import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import profile from "../assets/profile.jpeg";
import designer from "../assets/designer.jpg";
import typeface from "../assets/typeface.jpg";

const Feed = () => {
  return (
    <div className="col-span-12 lg:col-span-6 lg:mx-8">
      <div className="card !drop-shadow-none !p-0">
        <div className="px-8 py-4 flex items-center">
          <img src={profile} alt="Profile pic" className="rounded-full w-12" />
          <input
            type="text"
            name="post"
            placeholder="Share your thoughts..."
            className="outline-none border-none flex-1 ml-5 placeholder:text-xl text-xl w-full"
          />
        </div>
        <div className="flex border-2 border-gray-100 rounded-b-md">
          <span className="flex flex-1 items-center justify-center border-right cursor-pointer rounded-bl-md">
            <CameraAltOutlinedIcon className="text-blue-600 w-1" />
            <p className="m-2 text-sm font-medium">Photo</p>
          </span>
          <span className="flex flex-1 items-center justify-center p-2 border-right cursor-pointer">
            <VideocamOutlinedIcon className="text-blue-600 w-1" />
            <p className="m-2 text-sm font-medium">Video</p>
          </span>
          <span className="flex flex-1 items-center justify-center p-2 border-right cursor-pointer">
            <InsertDriveFileOutlinedIcon className="text-blue-600 w-1" />
            <p className="m-2 text-sm font-medium">File</p>
          </span>
          <span className="flex-1 p-2 bg-blue-700 text-white text-center cursor-pointer rounded-br-md">
            <p className="m-2 text-lg font-medium">Post</p>
          </span>
        </div>
      </div>
      <div className="mt-12 mb-6 flex justify-between">
        <p className="flex items-center text-gray-400 text-xs">
          <ErrorOutlineOutlinedIcon fontSize="small" className="mr-2 w-1" />{" "}
          Adverts may affect post order
        </p>
        <h5 className="flex items-center font-semibold cursor-pointer">
          Recent <KeyboardArrowDownIcon />
        </h5>
      </div>
      <div className="card !px-6 !py-3 flex">
        <div className="flex-1">
          {" "}
          <h6 className="font-medium mb-1 text-sm cursor-pointer">
            Senior Backend Developers <KeyboardArrowRightIcon />
          </h6>
          <p className="text-gray-400 text-xs">
            We selected the best tech projects to find you the ideal job.
            Salaries from $70k - $100k
          </p>
        </div>
        <p className="bg-gray-300 font-semibold text-[9px] px-2 py-1 rounded-md self-start">
          AD
        </p>
      </div>
      <div className="card">
        <div className="flex mb-6">
          <div className="flex-1 flex gap-3">
            <img
              src={designer}
              alt="Junior Digital Designer display pic"
              className="rounded-full w-12 object-cover cursor-pointer"
            />
            <div>
              <h6 className="font-semibold mb-1 text-md cursor-pointer">
                Junior Digital Designer
              </h6>
              <p className="text-gray-400 text-xs">153,390 followers</p>
            </div>
          </div>
          <p className="self-start cursor-pointer">
            <MoreHorizOutlinedIcon />
          </p>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          If you want to make a bold statement with your design work, look no
          further. We've rounded up a handful of unique typefaces that are
          bursting with personality!
        </p>
        <img
          src={typeface}
          alt="Typeface poster"
          className="rounded-t-md h-60 w-full object-cover cursor-pointer"
        />
        <div className="bg-gray-100 p-6 rounded-b-md cursor-pointer">
          <p className="font-semibold mb-2">
            Try these 12 typefaces to give your designs some major personality
          </p>
          <p className="flex justify-end text-sm text-gray-600">dribble.com</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
