import React, { useEffect, useState } from "react";
import "./resultsItem.scss"
import { RouteComponentProps, useLocation} from "@reach/router"
import { getItems } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { Item } from "~/components/results/item/item";
import { AMOUNT_OF_ITEMS } from "~/constants/api";



export const ResultsItem = (props: RouteComponentProps) => {
    const search = new URLSearchParams(useLocation().search);
    const query:string | null = search.get('search');
    const [products, setProducts]=  useState([]);

    useEffect(() => {
        setProducts([])
        async function getProducts() {
            const dataProducts = await getItems(query)
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