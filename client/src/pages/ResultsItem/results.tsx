import React, { useEffect, useState } from "react";
import "./results.scss"
import { RouteComponentProps, useLocation} from "@reach/router"
import { getItems } from "~/utils/api";
import { ItemsContainer } from "~/components/results/itemsContainer/itemsContainer";
import { Item } from "~/components/results/item/item";



export const ResultsItem = (props: RouteComponentProps) => {
    const search = new URLSearchParams(useLocation().search);
    const query = search.get('search');
    const [products, setProducts]=  useState([]);

    useEffect(() => {
        setProducts([])
        getItems(query).then(data => {
            setProducts(data);
        })
    }, [query])

    return(
        <section className="products-wrapper">
            
            { products?.items?.length > 0 && 
            
                <ItemsContainer>
                    {
                        products?.items.map( ( item: any) => (<Item key={item.id} item={item} />))
                    }
                </ItemsContainer>
            
            }
        </section>
    )
}