import React from "react";
import "./header.scss"
import { SearchBar } from "components/searchbar/searchbar";
import { Logo } from "components/logo/logo";


export const Header:React.FC = () => {

    return(
        <header className="header-wrapper">
           <Logo />
           <SearchBar/>
        </header>
    )
}