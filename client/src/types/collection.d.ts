interface Collection {
    id: number;
    title: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[];
    routeName: string;
}