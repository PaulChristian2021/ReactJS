import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import c from "./BrowsePage.module.css";

import { Link } from "react-router-dom";

const BrowsePage = () => {
  return (
    <section className={c.section}>
      <nav className={c.nav}>
        <SearchBar placeholder="Find products" inputClass={c.maxwidth500px} />
        <ul className={c.maxwidth500px}>
          <p>Browse Categories</p>
          {["men's clothing","electronics", "jewelry", "women's clothing"].map((el) => {
            return (
              <li key={el} className={c.li}>
                <Link to={`/products/${el}`}>{el}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default BrowsePage;
