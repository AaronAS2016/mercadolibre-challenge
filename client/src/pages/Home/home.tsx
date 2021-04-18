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
        <div>
            
        </div>
    )
}
