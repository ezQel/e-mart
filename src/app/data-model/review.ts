import { firestore } from 'firebase/app';

export class Review {
    rating: number;
    userName: string;
    message: string;
    date: firestore.Timestamp;
}
