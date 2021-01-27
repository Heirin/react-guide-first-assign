import React from "react";


const userInput = (props) => {

  const inputStyle = {
    borderRadius: "4px",
    border: "none",
    height: "2em"
  }

  return <input type="text" style={inputStyle} onChange={props.changed} value={props.currentName}></input>
}


export default userInput;
