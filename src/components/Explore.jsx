import React from "react";
import TagIcon from "@mui/icons-material/Tag";
import GroupsIcon from "@mui/icons-material/Groups";

const Explore = ({ icon, text }) => {
  return (
    <div className="flex items-center text-sm my-2 cursor-pointer">
      {icon && icon === "tag" ? (
        <TagIcon className="text-blue-600 w-1" fontSize="small" />
      ) : (
        <GroupsIcon className="text-blue-600 w-1" fontSize="small" />
      )}
      <p className="text-gray-500 font-medium mx-2">{text}</p>
    </div>
  );
};

export default Explore;
