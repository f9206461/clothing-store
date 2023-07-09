interface Action {
    type: string;
    payload: any;
}

interface RootState {
    cart: CartReducer;
    directory: DirectoryReducer;
    shop: ShopReducer;
    user: UserReducer;
}

interface CartReducer {
    hidden: boolean;
    cartItems: CartItem[];
}

interface DirectoryReducer {
    sections: Section[];
}

interface ShopReducer {
    collections: {
        hats: Collection;
        sneakers: Collection;
        jackets: Collection;
        womens: Collection;
        mens: Collection;
    } | null;
    isFetching: boolean;
    errorMessage: any;
}

interface UserReducer {
    currentUser: any;
    error: any;
}