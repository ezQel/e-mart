import { Extra } from './extra';

export class Product {
    key: string;
    name: string;
    category: string;
    stock: number;
    price: number;
    description: string;
    imageurl: string;
    created: firebase.default.firestore.Timestamp;
    modified: firebase.default.firestore.Timestamp;
    extras: Extra[];
    customExtras: Extra[];
}
