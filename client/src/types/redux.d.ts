interface Action {
    type: string;
    payload: any;
}

interface CartReducer {
    hidden: boolean;
    cartItems: Item[];
}