
export class Review {
    productId: string;
    rating: number;
    userName: string;
    message: string;
    date: firebase.default.firestore.Timestamp;
}
