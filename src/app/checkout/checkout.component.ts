import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { CartItem } from '../data/cart-item';
import { Address } from '../data/address';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Order } from '../data/order';
import * as firebase from 'firebase';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: CartItem[];
  totalValue: number;
  paymentMethod: string;
  userAddress: Address;
  editUserAddress: boolean;
  btnDisabled: boolean;

  constructor(
    public userService: UserService,
    private cartService: CartService,
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router,
    private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Checkout');
    this.cart = this.cartService.getCart();
    this.totalValue = this.cartService.getTotalValue();
    this.userAddress = this.userService.userAddress;
  }

  placeOrder(): void {
    if (this.paymentMethod && this.userAddress) {
      this.btnDisabled = true;
      this.placeProductOrders(); // TODO: send cart to firebse functions and place orders from there
      // process the payment information and set payment field on the order through firebase functions
      // DO NOT do it here
      // placeOrder and set payment to waiting as you await payment confirmation
      // send cart to firebse functions and place orders from there
      // automatically cancel order if payment is declined
    }
    else {
      (this.paymentMethod) ? '' : this.snackBar.open('Please choose a payment method', 'DISMISS', { duration : 3000});
      (this.userAddress) ? '' : this.snackBar.open('Your address is required', 'DISMISS', { duration : 3000});
    }
  }

  choosePayment(payment: string): void {
    this.paymentMethod = payment;
  }

  editAddress(): void {
    this.editUserAddress = !this.editUserAddress;
  }

  placeProductOrders(): void{
    const batch = this.db.firestore.batch();
    this.cart.forEach((cartItem) => {
      const id = this.db.createId();
      const ref = this.db.collection('orders').doc<Order>(id).ref;
      batch.set(ref, {
        orderId: id,
        product : cartItem.product,
        quantity : cartItem.quantity,
        value: cartItem.value,
        date: firebase.default.firestore.Timestamp.now(),
        orderedBy: this.userService.currentUser.uid,
        deliverTo : this.userService.userAddress,
        status: 'new',
        payment: 'cod'
      });
    });
    batch.commit().then(
      () => {
        this.cart = [];
        this.snackBar.open('order placement sucessful', 'Dismiss', { duration: 3000 });
        this.router.navigate(['orders']);
      },

      () => {
        this.btnDisabled = false;
        this.snackBar.open('an error occured', 'Dismiss', { duration: 3000 });
      }
    );
  }

}
