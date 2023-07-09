export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
    // Just want to find if the cartItemToAdd exists in the cart
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); 
    //find will only return the first match, while filter returns all matches
    
    // If the item exists in the cart
    if (existingCartItem) {
        // Returning a new array
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems: Item[], cartItemToRemove: Item) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem?.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}