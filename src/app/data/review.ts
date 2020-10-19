import { firestore } from 'firebase/app';

export class Review {
    productId: string;
    rating: number;
    userName: string;
    message: string;
    date: firestore.Timestamp;
}
