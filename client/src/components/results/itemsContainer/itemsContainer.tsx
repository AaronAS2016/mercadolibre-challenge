import React, { FunctionComponent } from "react";
import "./ItemsContainer.scss";

export const ItemsContainer: FunctionComponent = ({ children }) => {
  return <div className="items-wrapper">{children}</div>;
};
