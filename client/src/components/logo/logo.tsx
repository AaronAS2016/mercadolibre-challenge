import React from "react";
import "./logo.scss";
import MercadoLibreLogo from 'assets/img/Logo_ML@2x.png';

export const Logo:React.FC = () => {
    return(
        <picture>
            <img src={ MercadoLibreLogo } />
        </picture>
    )
}