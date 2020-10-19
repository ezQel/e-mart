import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/data-model/cart-item';
import { Product } from 'src/app/data-model/product';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { firestore } from 'firebase/app';
import { Order } from './data-model/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = [];

  constructor(private router: Router, private db: AngularFirestore, private snackbar: MatSnackBar, private userService: UserService) { }

  add(prdct: Product, qty: number): void{
    const item: CartItem = {
      itemId: new Date().getMilliseconds(),
      product: prdct,
      quantity: qty,
      value: (prdct.price * qty),
    };

    const index = this.cart.findIndex(o => o.product === prdct);

    if (index > -1) {
      this.cart.splice(index, 1, item);
    }
    else{
      this.cart.push(item);
    }
  }

  remove(id): void{
    this.cart = this.cart.filter(i => i.itemId !== id);
  }

  getCart(): CartItem[]{
    return this.cart;
  }

  size(): number{
    return this.cart.length;
  }

  getTotalValue(): number{
    return (this.cart.length > 0) ? this.cart.map(i => i.value).reduce((i, j) => i + j) : 0;
  }

  placeOrder(): void{
    const batch = this.db.firestore.batch();
    this.cart.forEach((cartItem) => {
      const id = this.db.createId();
      const ref = this.db.collection('orders').doc<Order>(id).ref;
      batch.set(ref, {
        orderId: id,
        product : cartItem.product,
        quantity : cartItem.quantity,
        value: cartItem.value,
        date: firestore.Timestamp.now(),
        orderedBy: this.userService.currentUser.uid,
        deliverTo : this.userService.userAddress,
        status: 'new'
      });
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
