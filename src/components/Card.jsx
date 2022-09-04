import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Card = ({ data, children }) => {
  return (
    <div className="card">
      <h3 className="font-bold text-lg mb-8">{data.title}</h3>

      {children}

      <p className="cursor-pointer font-bold text-blue-700">
        {data.ending}{" "}
        {data.arrow === "KeyboardArrowDown" ? (
          <KeyboardArrowDown />
        ) : (
          <KeyboardArrowRight />
        )}
      </p>
    </div>
  );
};

export default Card;
