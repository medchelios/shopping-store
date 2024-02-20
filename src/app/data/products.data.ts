export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    thumbUrl: string;
    imageUrl: string;
}

function generateUID(): string {
    return Math.random().toString(36).substring(2);
}

export const PRODUCTS: Product[] = [
    {
        id: generateUID(),
        name: "Frigidaire 24 in. Stainless Steel Built-in Dishwasher with EvenDry",
        description: "Frigidaire 24 in. Stainless Steel Built-in Dishwasher with EvenDryi",
        price: 1299,
        thumbUrl: "assets/images/products/product_1.jpg",
        imageUrl: "assets/images/products/product_1.jpg"
    },
    {
        id: generateUID(),
        name: "Eurodib Undercounter 120 lb. Ice Machine",
        description: "Eurodib Undercounter 120 lb. Ice Machine",
        price: 999,
        thumbUrl: "assets/images/products/product_2.jpg",
        imageUrl: "assets/images/products/product_2.jpg"
    },
    {
        id: generateUID(),
        name: "Montre connectée Samsung Galaxy Watch 4",
        description: "Montre intelligente avec suivi de la santé avancé, suivi du sommeil et compatibilité avec les smartphones Android",
        price: 299,
        thumbUrl: "assets/images/products/product_2.jpg",
        imageUrl: "assets/images/products/product_2.jpg"
    },
    {
        id: generateUID(),
        name: "Console de jeu Sony PlayStation 5",
        description: "Nouvelle console de jeu de Sony avec processeur AMD Ryzen, lecteur Blu-ray Ultra HD et 825 Go de stockage SSD",
        price: 499,
        thumbUrl: "assets/images/products/product_3.jpg",
        imageUrl: "assets/images/products/product_3.jpg"
    },
    {
        id: generateUID(),
        name: "Casque audio Bose QuietComfort 45",
        description: "Casque sans fil avec technologie de réduction de bruit active, Bluetooth et jusqu'à 24 heures d'autonomie de batterie",
        price: 329,
        thumbUrl: "assets/images/products/product_2.jpg",
        imageUrl: "assets/images/products/product_2.jpg"
    }
];
