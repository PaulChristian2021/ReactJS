import React from "react";
import { Link } from "react-router-dom";
import c from "./Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  return (
    <header className={c.header}>
      <div>
        <h1><Link to="/">Minastop</Link></h1>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
