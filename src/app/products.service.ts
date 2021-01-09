import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Product } from './data/product';
import { Review } from './data/review';
import { Category } from './data/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFirestore) {
  }

  get(productId: string): Observable<Product>{
    return this.db.collection('products').doc<Product>(productId).valueChanges();
  }

  getProductsFromCategory(category: string): Observable<Product[]>{
    return this.db.collection<Product>('products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getPopular(): Observable<Product[]>{
    return this.db.collection<Product>('products').valueChanges();
  }

  getReviews(productId): Observable<Review[]>{
    return this.db.collection<any>('reviews').doc(productId).collection<Review>('reviews').valueChanges();
  }

  getCategories(): Observable<Category[]>{
    return this.db.collection<Category>('categories').valueChanges();
  }

}
