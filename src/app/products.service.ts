import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsRef;

  constructor(private db: AngularFirestore) {
  }

  get(id: string): any{
    return this.db.collection('products').doc(id).get();
  }

  getProductsFromCategory(category: string): any{
    return this.db.collection('products', a => a.where('category', '==', category)).valueChanges();
  }

  getPopular(): any{
    return this.db.collection('products').valueChanges();
  }

  getReviews(productId): any{
    return this.db.collection('reviews').doc(productId).valueChanges();
  }

  getCategories(): any{
    return this.db.collection('categories').valueChanges();
  }

  search(searchStr: string): void{
  }

}
