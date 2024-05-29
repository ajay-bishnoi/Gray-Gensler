import React from "react";

const Commonbtn = ({ color, buttonName, name }) => {
  return (
    <>
      <button
        className={`fw-semibold fs-16 lh-19 ff-inter ${color} ${buttonName}`}
      >
        {name}
      </button>
    </>
  );
};
export default Commonbtn;
