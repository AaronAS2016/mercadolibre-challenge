import React from "react";
import "./itemInfo.scss"

interface ItemProps {
    product: any;
}

export const ItemInfo= ({ product }: ItemProps) => {

    if(product === []) { return null; }

    const { id, title, description, condition, sold_quantity, price: { amount }, picture } = product; 
    return(
        <div className="item-info-wrapper"> 
            <picture className="item-info-wrapper__image" >
                <img src={picture} alt={title} />
            </picture>
            <div className="item-info-wrapper__info">
                <p className="item-info-wrapper__condition">
                    {`${condition} - ${sold_quantity} vendidos`}
                </p>
                <p className="item-info-wrapper__title">
                    {title}
                </p>
                <p className="item-info-wrapper__price">
                    {`$${amount.toLocaleString()}`}    
                    
                </p>
                <button className="btn btn--primary item-info-wrapper__button "> Comprar </button>
            </div>
            <div className="item-info-wrapper-description">
                <h3 className="item-info-wrapper-description__title">Descripcion del producto</h3>
                <p className="item-info-wrapper-description__text"> { description } </p>    
                
            </div>
        
        
        </div>
    )
}