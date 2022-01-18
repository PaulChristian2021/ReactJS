import React from "react";
// import { Link } from "react-router-dom";
import c from "./HelpArticleLi.module.css";

const HelpArticleLi = (props) => {
  // console.log(props)
  // const a = props.article;
  return (
    <li className={c.li} onClick={()=>props.toggleArticles(props.id)}>
      {props.title}
    </li>
  );
};

export default HelpArticleLi;
