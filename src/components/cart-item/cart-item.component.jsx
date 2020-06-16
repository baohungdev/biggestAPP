import React from "react";

import {
  CartItemContainer,
  ItemDetails,
  SpanName,
  Image,
} from "./cart-item.styles";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="" />
      <ItemDetails>
        <SpanName>{name}</SpanName>
        <span className="price">
          {quantity} x${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
