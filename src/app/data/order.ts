import { ProductInfo } from './productInfo';
import { Address } from './address';

export class Order {
    orderId: string;
    product: ProductInfo;
    quantity: number;
    value: number;
    orderedBy: string;
    deliverTo: Address;
    date: firebase.default.firestore.Timestamp;
    payment: string;
    status: string;
}
