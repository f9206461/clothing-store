import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{itemCount}</span>
    </div>
)

// Take state from rootReducer, then pass to the CartIcon as props
const mapStateToProps = createStructuredSelector({
    // mapStateToProps has a shallow equality check (for primitive data types). 
    // Hence, even without using selector, it will not re-render.
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);