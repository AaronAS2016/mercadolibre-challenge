import React, { useState } from "react";
import "./searchbar.scss";

export const SearchBar: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <nav className="navbar-wrapper">
      <input
        className="navbar-wrapper__search_input"
        placeholder="Nunca dejes de buscar"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="navbar-wrapper__search_button" />
    </nav>
  );
};
