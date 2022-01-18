import React from "react";
import c from "./HelpCategoyLi.module.css";

const HelpCategoyLi = (props) => {
  // console.log(props);
  return (
    <li
      className={`${c.li} ${props.className} ${
        props.active === props.text ? c.active : ""
      }`}
      onClick={()=>props.onClick(props.text)}
    >
      {props.text}
    </li>
  );
};

export default HelpCategoyLi;
