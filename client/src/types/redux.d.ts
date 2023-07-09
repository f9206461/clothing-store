interface Action {
    type: string;
    payload: any;
}

interface RootState {
    cart: CartReducer;
    directory: DirectoryReducer;
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