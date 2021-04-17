import React from "react";
import "./header.scss"
import { SearchBar } from "layout/searchbar/searchbar";
export const Header:React.FC = () => {
    return(
        <header>
           <SearchBar/>
        </header>
    )
}