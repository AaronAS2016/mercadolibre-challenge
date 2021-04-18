import React, { useEffect, useState } from "react";
import "./itemDescription.scss";
import { RouteComponentProps } from "@reach/router";
import { getItem } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { ItemInfo } from "~/components/itemDescription /itemInfo/itemInfo";

interface ItemDescriptionProps extends RouteComponentProps {
  id?: string;
}

export const ItemDescription = ({ id }: ItemDescriptionProps) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct([]);
    async function getProduct() {
      const dataProducts = await getItem(id);
      setProduct(dataProducts);
    }
    getProduct();
  }, [id]);

  console.log(product);
  return (
    <section className="product-wrapper">
      <ItemsContainer>
        {product?.item && <ItemInfo product={product["item"]} />}
      </ItemsContainer>
    </section>
  );
};
