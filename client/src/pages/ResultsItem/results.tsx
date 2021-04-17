import React from "react";
import "./results.scss"
import { RouteComponentProps, useLocation} from "@reach/router"

interface ResultsProps extends RouteComponentProps {
    query?: string;
}

export const ResultsItem = (props: ResultsProps) => {
    const search = new URLSearchParams(useLocation().search);
    const query = search.get('search');

    return(
        <div>{query}</div>
    )
}