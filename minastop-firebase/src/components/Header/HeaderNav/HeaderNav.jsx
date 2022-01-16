import React from "react";
import { Link } from "react-router-dom";
import c from "./HeaderNav.module.css";

import IconButton from "../../ui/IconButton";
import CartItemsCounter from "./CartItemsCounter";

import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderNav = () => {
  return (
    <nav className={c.nav}>
      <IconButton>
        <AiOutlineMenu />
      </IconButton>

      <IconButton>
        <Link to="/cart">
          <BsCart2 />
          <CartItemsCounter />
        </Link>
      </IconButton>
    </nav>
  );
};

export default HeaderNav;
