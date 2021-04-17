import React from "react";
import "./container.scss";
import { Header } from "layout/header/header";

export const Container: React.FunctionComponent = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
