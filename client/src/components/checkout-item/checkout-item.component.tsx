import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
import { CheckoutItemCont, ImgCont, ImgBox, TextCont, QtyCont, ArrowCont, ValueCont, RemoveBtnCont } from "./checkout-item.styles";

interface Props {
    cartItem: CartItem;
    clearItem: (item: CartItem) => void;
    addItem: (item: CartItem) => void;
    removeItem: (item: CartItem) => void;
}

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }: Props) => {
    const { name, price, quantity, imageUrl } = cartItem;

    return (
        <CheckoutItemCont>
            <ImgCont>
                <ImgBox src={imageUrl} alt="item" />
            </ImgCont>
            <TextCont>{name}</TextCont>
            <QtyCont>
                <ArrowCont onClick={() => removeItem(cartItem)}>
                    &#10094;
                </ArrowCont>
                <ValueCont>
                    {quantity}
                </ValueCont>
                <ArrowCont onClick={() => addItem(cartItem)}>
                    &#10095;
                </ArrowCont>
            </QtyCont>
            <TextCont>${price}</TextCont>
            <RemoveBtnCont onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveBtnCont>
        </CheckoutItemCont>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    clearItem: (item: CartItem) => dispatch(clearItemFromCart(item)),
    addItem: (item: CartItem) => dispatch(addItem(item)),
    removeItem: (item: CartItem) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);