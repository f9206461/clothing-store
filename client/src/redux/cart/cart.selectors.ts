import { createSelector } from "reselect";

// Input Selector
const selectCart = (state: any) => state.cart;

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
        (accu: number, item: Item) => accu + (item.quantity * item.price),
        0
    )
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accu: number, item: Item) => accu + item.quantity,
        0
    )
)