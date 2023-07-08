import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutPageCont, CheckoutHeaderCont, HeaderBlock, TotalCont, StripeCheckoutBtnCont, TestWarningCont } from "./checkout.styles";

interface Props {
    cartItems: any[];
    totalPrice: number;
}

const CheckoutPage = ({cartItems, totalPrice}: Props) => (
    <CheckoutPageCont>
        <CheckoutHeaderCont>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeaderCont>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <TotalCont>
            <span>TOTAL: ${totalPrice}</span>
        </TotalCont>
        <TestWarningCont>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </TestWarningCont>
        <StripeCheckoutBtnCont price={totalPrice} />
    </CheckoutPageCont>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);