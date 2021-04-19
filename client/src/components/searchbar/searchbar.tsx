import React, { FunctionComponent, useState } from "react";
import { navigate } from "@reach/router";
import "./searchbar.scss";
import { useItems } from "~/context/items-context";

export const SearchBar: FunctionComponent = () => {
  const { query, setQuery } = useItems();
  const urlSearch = "/items?search=";

  return (
    <nav className="navbar-wrapper">
      <input
        className="navbar-wrapper__search_input"
        placeholder="Nunca dejes de buscar"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && query.trim()) {
            navigate(urlSearch + query);
          }
        }}
      />
      <button
        className="navbar-wrapper__search_button"
        onClick={() => {
          if (query.trim()) {
            navigate(urlSearch + query);
          }
        }}
      />
    </nav>
  );
};
