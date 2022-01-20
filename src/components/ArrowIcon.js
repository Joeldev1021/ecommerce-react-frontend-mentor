import React from "react";

const ArrowIcon = ({ arrow }) => {
  return (
    <svg
    className="stroke-current hover:stroke-current"
    width="13"
    height="18"
  >
    <path d={arrow === "next" ? "m2 1 8 8-8 8" : "M11 1 3 9l8 8"} strokeWidth="3" fill="none" fillRule="white" />
  </svg>
  );
};

export default ArrowIcon;
