import React from "react";

const WidgetCard = ({ title, company, area, avatar }) => {
  return (
    <div className="my-4 flex gap-4">
      <img
        src={avatar}
        alt="avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <span className="text-gray-500 text-xs">
          <p className="my-1">{company}</p>
          <p className="my-1">{area}</p>
        </span>
      </div>
    </div>
  );
};

export default WidgetCard;
