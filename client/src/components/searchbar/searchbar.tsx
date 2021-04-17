import React, { FunctionComponent, useState } from "react";
import { navigate } from "@reach/router";
import "./searchbar.scss";


export const SearchBar: FunctionComponent = () => {
  const [text, setText] = useState("");
  const urlSearch = "/items?search="

  return (
    <nav className="navbar-wrapper">
      <input
        className="navbar-wrapper__search_input"
        placeholder="Nunca dejes de buscar"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate( urlSearch + text)
          }
        }}
      />
      <button
        className="navbar-wrapper__search_button"
        onClick={() => navigate( urlSearch + text) }
      />
    </nav>
  );
};
