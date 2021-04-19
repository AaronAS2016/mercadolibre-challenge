import React, { useEffect, useState } from "react";
import "./itemDescription.scss";
import { RouteComponentProps } from "@reach/router";
import { controller, getItem } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { ItemInfo } from "~/components/itemDescription /itemInfo/itemInfo";
import { Breadcrumb } from "~/layout/breadcrumb/breadcrumb";
import { useItems } from "~/context/items-context";

interface ItemDescriptionProps extends RouteComponentProps {
  id?: string;
}

export const ItemDescription = ({ id }: ItemDescriptionProps) => {
  const [product, setProduct] = useState<any>({});
  const { setCategories } = useItems();

  useEffect(() => {
    setProduct({});
    setCategories([]);
    async function getProduct() {
      const dataProducts = await getItem(id);
      setProduct(dataProducts);
      setCategories(dataProducts.categories);
    }
    getProduct();

  }, [id]);

  return (
    <section className="product-wrapper">
      <ItemsContainer>
        {product?.item && <ItemInfo product={product.item} />}
      </ItemsContainer>
    </section>
  );
};
