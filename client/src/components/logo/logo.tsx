import React from "react";
import "./logo.scss";
import MercadoLibreLogo from 'assets/img/Logo_ML@2x.png';

export const Logo:React.FC = () => {
    return(
        <picture className="logo-wrapper">
            <img className="logo_wrapper__image" src={ MercadoLibreLogo } alt="MercadoLibre" />
        </picture>
    )
}