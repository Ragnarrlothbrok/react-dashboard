import React from "react";

const Card = ({ icon, name, quantity, bg }) => {
  return (
    <div
      className="rounded-[20px] p-3 lg:py-5 lg:px-[25px] basis-0 grow"
      style={{ backgroundColor: bg }}
    >
      <div className="flex justify-end">{icon}</div>
      <div>
        <span className="text-[10px] lg:text-sm mb-[5px]">{name}</span>
        <br />
        <span className="text-sm lg:text-2xl font-bold	">{quantity}</span>
      </div>
    </div>
  );
};

export default Card;
