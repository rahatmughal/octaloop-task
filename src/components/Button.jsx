import React from "react";

const Button = (props) => {
  return (
    <button
      className={`relative py-2 xl:px-5 px-3 group font-inter text-white rounded-md font-medium tracking-tight ${props.className}`}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      <span className="relative z-10">{props.text}</span>
      {/* Outer box for the rotation effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-second-primary group-hover:bg-transparent border-2 border-second-primary rounded-md transform rotate-0 transition duration-500 group-hover:rotate-180"></span>
    </button>
  );
};

export default Button;
