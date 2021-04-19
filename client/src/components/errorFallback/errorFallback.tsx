import React from "react";
import "./errorFallback.scss"

export const ErrorFallback:React.FC = () => {
    return(
        <div className="error-wrapper"> Ups! algo salio mal :( vuelve a intentarlo mas tarde <button className="btn btn--primary" onClick={() => window.location.reload()}> Volver a intentar </button> </div>
    )
}