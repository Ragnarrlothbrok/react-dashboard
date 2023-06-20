import React from "react";

const SideButton = ({ text, icon }) => {
  return (
    <div className="text-sm font-lato text--gray flex flex-row gap-x-1">
      <div className="self-center">{text}</div>
      <div className="self-center">{icon}</div>
    </div>
  );
};

export default SideButton;
