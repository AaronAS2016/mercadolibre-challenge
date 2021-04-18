import React from "react";
import "./itemInfo.scss";

interface ItemProps {
  product: any;
}

export const ItemInfo = ({ product }: ItemProps) => {
  if (product === []) {
    return null;
  }

  const {
    title,
    description,
    condition: rawCondition,
    sold_quantity,
    price: { amount },
    picture,
    link
  } = product;
  const condition = rawCondition === "new" ? "Nuevo" : "Usado";
  return (
    <div className="item-info-wrapper">
      <picture className="item-info-wrapper__image">
        <img src={picture} alt={title} />
      </picture>
      <div className="item-info-wrapper__info">
        <p className="item-info-wrapper__condition">
          {`${condition} - ${sold_quantity} vendidos`}
        </p>
        <p className="item-info-wrapper__title">{title}</p>
        <p className="item-info-wrapper__price">
          {`$${amount.toLocaleString()}`}
        </p>
        <a href={link} target="_blank">
          <button className="btn btn--primary item-info-wrapper__button ">
            {" "}
            Comprar{" "}
          </button>
        </a>
      </div>
      <div className="item-info-wrapper-description">
        <h3 className="item-info-wrapper-description__title">
          Descripcion del producto
        </h3>
        <p className="item-info-wrapper-description__text"> {description} </p>
      </div>
    </div>
  );
};
