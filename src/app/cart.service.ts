import { Injectable } from '@angular/core';
import { Order } from 'src/app/data-model/order';
import { Product } from 'src/app/data-model/product';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Order[] = [];

  constructor(private router: Router, private db: AngularFirestore, private snackbar: MatSnackBar) { }

  add(prdct: Product, qty: number): void{
    const order: Order = {
      orderId: Math.random().toString(), // TODO replace with unique server key
      product: prdct,
      quantity: qty,
      customerId: '', // TODO replace with actual UID
      value: (prdct.price * qty), // TODO save actual prices stored on sever instead of this
      date: new Date().toDateString()
    };

    const index = this.cart.findIndex(o => o.product === prdct);

    if (index > -1) {
      this.cart.splice(index, 1, order);
    }
    else{
      this.cart.push(order);
    }
  }

  remove(id): void{
    this.cart = this.cart.filter(i => i.orderId !== id);
  }

  getCart(): Order[]{
    return this.cart;
  }

  size(): number{
    return this.cart.length;
  }

  getTotalValue(): number{
    return (this.cart.length > 0) ? this.cart.map(i => i.value).reduce((i, j) => i + j) : 0;
  }

  placeOrder(): any{
    const batch = this.db.firestore.batch();
    this.cart.forEach((order) => {
      const ref = this.db.collection('orders').doc().ref;
      batch.set(ref, order);
    });
    batch.commit().then(
      () => {
        this.cart = [];
        this.snackbar.open('order placement sucessful', 'Dismiss', { duration: 3000 });
        this.router.navigate(['orders']);
      }
    );
  }

}
