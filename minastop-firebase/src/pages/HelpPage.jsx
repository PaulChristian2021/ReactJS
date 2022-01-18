import React, { useState, useEffect } from "react";
import c from "./HelpPage.module.css";

import SearchCategoriesNav from "../components/SearchCategoriesNav/SearchCategoriesNav";
import SearchBar from "../components/SearchBar/SearchBar";

import HelpArticleLi from "../components/HelpArticleLi/HelpArticleLi";
import Article from "../components/HelpArticleLi/Article";

const HelpPage = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  const [articleId, setArticleId] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState({
    id: 1,
    date: "Jan 14, 2022",
    title:
      "[Technical Issues] What should I do if I encounter a problem/error/blank page on Minastop?",
    caption:
      "If you encounter technical issues on the app, such as problem loading pages, payment not processing, inability to add a product to cart, or inability to send messages via Minastop, contact us.",
    categories: ["tech", "account"],
  });

  useEffect(() => {
    fetch("./helpdatabase.json").then((res) =>
      res.json().then((data) => {
        setArticles(data);
        // console.log(data);
      })
    );
  }, []);
  useEffect(() => {
    //gets all categories based off articles state
    const cat = [];
    articles.forEach((a) => {
      a.categories.forEach((category) =>
        cat.includes(category) ? null : cat.push(category)
      );
    });
    setCategories(cat);
  }, [articles]);

  useEffect(() => {
    const article = articles.filter((a) => a.id === articleId);
    const [a] = article;
    setSelectedArticle(a);
    return () => {
      console.log(a, selectedArticle);
    };
  }, [articleId]);

  function toggleArticles(id) {
    console.log(id);
    setArticleId(id);
  }

  return (
    <section className={`section ${c.section}`}>
      <h2>Guides Center</h2>
      <SearchCategoriesNav className={c.nav}>
        <SearchBar placeholder="Find Products" />
      </SearchCategoriesNav>
      <section className={c.section2}>
        <ul className={c.categories}>
          {categories.map((c) => (
            <li className={c.category} key={c}>
              {c}
            </li>
          ))}
        </ul>
        <ul className={c.articles}>
          {!articleId &&
            articles.map((a) => (
              <HelpArticleLi
                key={a.id}
                id={a.id}
                title={a.title}
                caption={a.caption}
                date={a.date}
                categories={a.categories}
                toggleArticles={toggleArticles}
              />
            ))}
          {articleId && <Article article={selectedArticle} />}
        </ul>
      </section>
    </section>
  );
};

export default HelpPage;
