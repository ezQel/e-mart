// product model class
import { firestore } from 'firebase/app';

export class Product {
    key: string;
    name: string;
    category: string;
    stock: number;
    price: number;
    description: string;
    imageurl: string;
    created: firestore.Timestamp;
    modified: firestore.Timestamp;
}
