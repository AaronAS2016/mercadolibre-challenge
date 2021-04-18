import { RouteComponentProps } from "@reach/router";
import React from "react";
import { useItems } from "~/context/items-context";
import { Breadcrumb } from "~/layout/breadcrumb/breadcrumb";

interface BreadcrumbComponent extends RouteComponentProps {
  children: any;
}

export const ItemsRouter = ({ children }: BreadcrumbComponent) => {
  const { categories } = useItems();

  return (
    <>
      <Breadcrumb categories={categories} />
      {children}
    </>
  );
};
