import React from "react";
import Explore from "./Explore";

const ExploreContainer = ({ title, items }) => {
  return (
    <div className="mb-10">
      <h4 className="uppercase mb-3 text-gray-400 font-bold text-sm">
        {title}
      </h4>
      {items &&
        items.map((i) => <Explore icon={i.icon} text={i.text} key={i.text} />)}
    </div>
  );
};

export default ExploreContainer;
