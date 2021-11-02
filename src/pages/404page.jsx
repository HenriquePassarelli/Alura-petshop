import React from "react";
import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Page404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt="doguito ops" />
      <p className="naoencontrado-texto">Ops!!</p>
    </main>
  );
};

export default Page404;
