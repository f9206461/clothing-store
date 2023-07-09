import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // payload is optional, and we don't need it here
});

export const addItem = (item: Item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (item: Item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = (item: Item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});

export const updateCartInFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = (cartItems: Item[]) => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
    // Why do we need to pass in cartItems?
    // Because we are setting cart from Firebase to our reducer store.
});