import React, { useEffect, useState } from "react";
import "./itemResults.scss"
import { RouteComponentProps, useLocation} from "@reach/router"
import { getItems } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { Item } from "~/components/results/item/item";
import { AMOUNT_OF_ITEMS } from "~/constants/api";
import { useItems } from "~/context/items-context";



export const ItemResults = (props: RouteComponentProps) => {
    const search = new URLSearchParams(useLocation().search);
    const query:string | null = search.get('search');
    const [products, setProducts]=  useState<any>([]);
    const { setQuery, setCategories } = useItems();

    useEffect(() => {
        setProducts([]);
        setCategories([]);
        setQuery(query);
        async function getProducts() {
            const dataProducts = await getItems(query)
            setCategories(dataProducts.categories);
            setProducts(dataProducts);
        }
        getProducts();

    }, [query])

    return(
        <section className="products-wrapper">
            
            { products?.items?.length > 0 && 
            
                <ItemsContainer>
                    {
                        products?.items.slice(0, AMOUNT_OF_ITEMS).map( ( item: any) => (<Item key={item.id} item={item} />))
                    }
                </ItemsContainer>
            
            }
        </section>
    )
}