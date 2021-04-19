import React from "react";
import "./item.scss";
import free_shipping_image from "assets/img/ic_shipping@2x.png";
import { Link } from "@reach/router";

interface ItemProps {
  item: any;
}

export const Item = ({ item }: ItemProps) => {
  const { id, picture, title, price, free_shipping, location } = item;
  const { amount } = price;
  const realPrice = `$${amount.toLocaleString()}`;
  return (
    <div className="item-wrapper">
      <Link className="item-wrapper__title-wrapper" to={`/items/${id}`}>
        <img className="item-wrapper__logo" src={picture} />
      </Link>

      <div className="item-wrapper__product-info">
        <div className="item-wrapper__price-wrapper">
          <p className="item-wrapper__price"> {realPrice} </p>
          {free_shipping && (
            <img
              src={free_shipping_image}
              className="item-wrapper__free_shiping"
              alt="Envio gratis"
            />
          )}
        </div>
        <div className="item-wrapper__information">
          <Link className="item-wrapper__title-wrapper" to={`/items/${id}`}>
            <p className="item-wrapper__title"> {title} </p>
          </Link>
          <span className="item-wrapper__location">{location}</span>
        </div>
      </div>
    </div>
  );
};
