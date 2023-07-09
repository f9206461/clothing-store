import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

interface Props {
    toggleCartHidden: () => void;
    itemCount: number;
}

export const CartIcon = ({ toggleCartHidden, itemCount }: Props) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

// Take state from rootReducer, then pass to the CartIcon as props
const mapStateToProps = createStructuredSelector({
    // mapStateToProps has a shallow equality check (for primitive data types). 
    // Hence, even without using selector, it will not re-render.
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);