import React from "react";

const Input = ({ setURL, getVideoInfo }) => {
  const onChange = (e) => {
    setURL(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="https://www.youtube.com/watch?v=3olM-9vcd4M"
      onChange={onChange}
    />
  );
};

export default Input;
