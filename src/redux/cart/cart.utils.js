export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Just want to find if the cartItemToAdd exists in the cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    
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