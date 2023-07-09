interface Item {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

type CartItem = Item & {
    quantity: number;
}