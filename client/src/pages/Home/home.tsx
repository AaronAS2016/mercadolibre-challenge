import React, { useEffect } from "react";
import { RouteComponentProps} from "@reach/router"
import "./home.scss";
import { useItems } from "~/context/items-context";

export const Home = (props: RouteComponentProps) => {
    const { setQuery } = useItems();
    useEffect(()=> {
        setQuery("");
    }, [])
    return (
        <div className="home-wrapper">
            <h3 className="home-wrapper__title">Proba buscar los productos que estes interesado en la barra de busqueda :D</h3>
        </div>
    )
}
