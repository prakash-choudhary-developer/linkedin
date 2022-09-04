import React from "react";

const WidgetCard = ({ title, time, readers, latest }) => {
  return (
    <div className="my-4">
      <h4 className="font-medium text-sm">
        {title}
        {latest && (
          <span className="ml-5 py-1 px-2 bg-emerald-400 text-white rounded-lg text-[9px] font-bold">
            NEW
          </span>
        )}
      </h4>
      <span className="flex items-center text-gray-500 text-xs">
        <p>{time} ago</p>{" "}
        <span className="rounded-full w-1 h-1 bg-gray-500 mx-2"></span>{" "}
        <p>{readers} readers</p>
      </span>
    </div>
  );
};

export default WidgetCard;
