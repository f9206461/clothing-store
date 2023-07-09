import React from "react";
import { CartItemContainer, ImgContainer, ItemDetailsContainer, NameContainer } from "./cart-item.styles";

interface Props {
    item: CartItem;
}

const CartItem = ({item: { imageUrl, price, name, quantity }}: Props) => (
    <CartItemContainer>
        <ImgContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;