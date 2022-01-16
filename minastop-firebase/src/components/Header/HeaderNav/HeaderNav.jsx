import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import c from "./HeaderNav.module.css";

import HeaderMenu from "../../Modal/HeaderMenu";
import IconButton from "../../ui/IconButton";
import Backdrop from "../../ui/Backdrop";
import CartItemsCounter from "./CartItemsCounter";

import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderNav = () => {
  const [modal, setmodal] = useState(false);

  function toggleModal() {
    setmodal(!modal);
  }

  const sign = "Sign In"; //
  const create = true; //

  return (
    <>
      {modal &&
        ReactDOM.createPortal(
          <HeaderMenu toggleModal={toggleModal} />,
          document.querySelector("#modal")
        )}
      {modal &&
        ReactDOM.createPortal(
          <Backdrop className={c.backdrop}/>,
          document.querySelector("#backdrop")
        )}
      <nav className={c.nav}>
        <nav className={c.headerMenu}>
          <Link to={"/sign"}>{sign}</Link>
          {create && <Link to={"/create"}>Create</Link>}
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/help"}>Help Center</Link>
        </nav>
        <IconButton onClick={toggleModal} className={c.menu}>
          <AiOutlineMenu />
        </IconButton>

        <IconButton>
          <Link to="/cart">
            <BsCart2 />
            <CartItemsCounter />
          </Link>
        </IconButton>
      </nav>
    </>
  );
};

export default HeaderNav;
