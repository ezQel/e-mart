import { Product } from './product';
import { Address } from './address';
import { firestore } from 'firebase/app';

export class Order {
    orderId: string;
    product: Product;
    quantity: number;
    value: number;
    orderedBy: string;
    deliverTo: Address;
    date: firestore.Timestamp;
    status: string;
}
