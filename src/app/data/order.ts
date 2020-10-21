import { ProductInfo } from './productInfo';
import { Address } from './address';
import { firestore } from 'firebase/app';

export class Order {
    orderId: string;
    product: ProductInfo;
    quantity: number;
    value: number;
    orderedBy: string;
    deliverTo: Address;
    date: firestore.Timestamp;
    payment: string;
    status: string;
}
