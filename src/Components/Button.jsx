import React from "react";

const Button = (props) => {
  return (
    <div>
      <div className=" m-5 px-4 py-1.5 w-fit bg-green-600 text-white text-2xl rounded-full">
        {props.text}
      </div>
    </div>
  );
};

export default Button;
