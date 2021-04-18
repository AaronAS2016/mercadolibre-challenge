import React from "react";
import "./breadcrumb.scss";

interface BreadCrumbProps {
  categories: string[];
}

export const Breadcrumb = ({ categories }: BreadCrumbProps) => {
  return (
    <div className="breadcrumb-wrapper">
      {categories.map((category, index) => (
        <p key={index} className="breadcrumb-wrapper__item">{category}</p>
      ))}
    </div>
  );
};
