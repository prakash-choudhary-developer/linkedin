import React from "react";

const HeaderIcons = ({ Icon, text }) => {
  return (
    <div className="flex items-center">
      {Icon && <Icon />}
      <p className="ml-2">{text}</p>
    </div>
  );
};

export default HeaderIcons;
