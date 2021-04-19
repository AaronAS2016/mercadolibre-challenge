import React from "react";
import "./loader.scss";

interface LoaderProps {
  status: boolean;
  text: string;
}

export const Loader: React.FC<LoaderProps> = ({ status, text }) => {
  return (
    <>
      <div className={`loader ${status && `loader--animate`}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>{ text }</span>
    </>
  );
};
