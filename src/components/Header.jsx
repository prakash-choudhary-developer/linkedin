import React from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcons from "./HeaderIcons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import profile from "../assets/profile.jpeg";

const Header = () => {
  return (
    <header className="flex justify-between px-4 lg:px-20 xl:px-28 2xl:px-36 py-4 shadow-sm bg-white">
      <div className="flex gap-2">
        <img src={logo} alt="Linkedin Logo" className="h-10" />
        <div className="flex items-center rounded-md bg-[#e8f2fa] px-4 py-2 w-60">
          <SearchIcon />
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="outline-none bg-transparent placeholder:text-slate-600 ml-2 w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 text-gray-500 font-medium text-sm">
        <div className="hidden lg:flex items-center gap-6 text-gray-500 font-medium text-sm">
          <HeaderIcons Icon={HomeOutlinedIcon} text="Home" />
          <HeaderIcons Icon={PersonOutlinedIcon} text="My network" />
          <HeaderIcons Icon={BusinessCenterOutlinedIcon} text="Jobs" />
          <HeaderIcons Icon={MailOutlineIcon} text="Messaging" />
          <HeaderIcons
            Icon={NotificationsNoneOutlinedIcon}
            text="Notifications"
          />{" "}
        </div>
        <div className="flex items-center gap-4 ml-2 pl-6 lg:border-l-2 lg:border-gray-200">
          <img src={profile} alt="Profile pic" className="rounded-full w-8" />
          <p className="font-medium text-sm">
            Jane Doe <KeyboardArrowDownIcon />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
