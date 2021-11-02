import React, { useState, useEffect } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";

import "../assets/css/blog.css";
import CategoriesList from "../components/CategoryList";
import PostList from "../components/PostList";
import { search } from "../api/api";

import SubCategory from "./SubCategory";

const Category = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [ subCategory, setSubCategory ] = useState([]);
  useEffect(() => {
    search(`/categorias/${id}`, (category) => {
      setSubCategory(category.subcategorias);
    });
  }, [url]);
  console.log(path);
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet News</h2>
      </div>
      <CategoriesList />
      <ul className="lista-categorias container flex">
        {subCategory.map((subcategory) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategory}
          >
            <Link to={`${url}/${subcategory}`}>{subcategory}</Link>
          </li>
          
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <PostList url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategory />
        </Route>
      </Switch>
    </>
  );
};

export default Category;
