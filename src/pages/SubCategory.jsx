import React from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList";

const SubCategory = () => {
  const { subcategoria } = useParams();
  console.log('sub',subcategoria);
  return <PostList url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategory;
