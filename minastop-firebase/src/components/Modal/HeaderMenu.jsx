import React from "react";

import { Link } from "react-router-dom";

import c from "./HeaderMenu.module.css";

const HeaderMenu = (props) => {
  const sign = "Sign In";
  const create = true;
  return (
    <nav className={c.nav}  onClick={props.toggleModal}>
      <div onClick={(e)=>e.stopPropagation()}>
        <Link to={"/sign"}>{sign}</Link>
        {create && <Link to={"/create"}>{create}</Link>}
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/help"}>Help Center</Link>
      </div>
    </nav>
  );
};

export default HeaderMenu;
