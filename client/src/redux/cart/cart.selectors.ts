import { createSelector } from "reselect";

// Input Selector
const selectCart = (state: RootState) => state.cart;

// Using createSelector
export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accu, item) => accu + (item.quantity * item.price),
        0
    )
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accu, item) => accu + item.quantity,
        0
    )
)