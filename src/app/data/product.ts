import { firestore } from 'firebase/app';
import { Extra } from './extra';

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
    extras: Extra[];
    customExtras: Extra[];
}
