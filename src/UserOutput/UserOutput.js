import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="user-output">
      <p>{props.username}</p>
      <p>P 2</p>
    </div>
  );
}


export default userOutput;
