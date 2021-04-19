import React, { useEffect, useState } from "react";
import "./itemsResults.scss";
import { navigate, RouteComponentProps, useLocation } from "@reach/router";
import { getItems } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { Item } from "~/components/results/item/item";
import { AMOUNT_OF_ITEMS } from "~/constants/api";
import { useItems } from "~/context/items-context";
import { Loader } from "~/components/loader/loader";

export const ItemsResults = (props: RouteComponentProps) => {
  const search = new URLSearchParams(useLocation().search);
  const query: string | null = search.get("search");

  const [products, setProducts] = useState<any>([]);
  const { setQuery, setCategories } = useItems();
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    setLoadingStatus(true);
    setProducts([]);
    setCategories([]);
    setQuery(query);
    async function getProducts() {
      if (query) {
        const dataProducts = await getItems(query);
        setCategories(dataProducts.categories);
        setProducts(dataProducts);
        setLoadingStatus(false);
      } else {
        navigate("/");
      }
    }
    getProducts();
  }, [query]);

  return (
    <section className="products-wrapper">
      {products?.items?.length > 0 && (
        <ItemsContainer>
          {products?.items.slice(0, AMOUNT_OF_ITEMS).map((item: any) => (
            <Item key={item.id} item={item} />
          ))}
        </ItemsContainer>
      )}

      {isLoading && (
        <Loader
          status={isLoading}
          text={"Buscando los productos que queres..."}
        />
      )}
    </section>
  );
};
