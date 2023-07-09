interface Action {
    type: string;
    payload: any;
}

interface RootState {
    cart: CartReducer;
    directory: DirectoryReducer;
    shop: ShopReducer;
}

interface CartReducer {
    hidden: boolean;
    cartItems: Item[];
}

interface DirectoryReducer {
    sections: {
        title: string;
        imageUrl: string;
        size: string;
        id: number;
        linkUrl: string;
    }[];
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