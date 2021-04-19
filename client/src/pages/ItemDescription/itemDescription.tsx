import React, { useEffect, useState } from "react";
import "./itemDescription.scss";
import { RouteComponentProps } from "@reach/router";
import { getItem } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { ItemInfo } from "~/components/itemDescription /itemInfo/itemInfo";
import { useItems } from "~/context/items-context";
import { Loader } from "~/components/loader/loader";

interface ItemDescriptionProps extends RouteComponentProps {
  id?: string;
}

export const ItemDescription = ({ id }: ItemDescriptionProps) => {
  const [product, setProduct] = useState<any>({});
  const { setCategories } = useItems();
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    setProduct({});
    setCategories([]);
    setLoadingStatus(true);
    async function getProduct() {
      const dataProducts = await getItem(id);
      setProduct(dataProducts);
      setCategories(dataProducts.categories);
      setLoadingStatus(false);
    }
    getProduct();
  }, [id]);

  return (
    <section className="product-wrapper">
      <ItemsContainer>
        {product?.item && <ItemInfo product={product.item} />}
      </ItemsContainer>
      {isLoading && <Loader status={isLoading} text="Buscando el producto que queres, aguardanos..." />}
    </section>
  );
};
