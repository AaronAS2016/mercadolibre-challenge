import React from "react";
import "./logo.scss";
import MercadoLibreLogo from "assets/img/Logo_ML@2x.png";
import { Link } from "@reach/router";

export const Logo: React.FC = () => {
  return (
    <picture className="logo-wrapper">
      <Link to="/">
        <img
          className="logo_wrapper__image"
          src={MercadoLibreLogo}
          alt="MercadoLibre"
        />
      </Link>
    </picture>
  );
};
