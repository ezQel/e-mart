import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CartItem } from '../data-model/cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: CartItem[];
  total;
  edit = false;

  paymentMethod;
  userAddress;

  constructor(
    private router: Router,
    private userService: UserService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Checkout');
    this.userAddress = this.userService.userAddress;
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotalValue();
  }

  placeOrder(): void {
    if (this.paymentMethod && this.userAddress) {
      this.cartService.placeOrder();
    }
    else {
      (this.paymentMethod) ? '' : this.snackBar.open('Please select a payment method', 'DISMISS', { duration : 3000});
      (this.userAddress) ? '' : this.snackBar.open('Your address is required', 'DISMISS', { duration : 3000});
    }

  }

  choosePayment(payment): void {
    this.paymentMethod = payment;
  }

  editAddress(): void {
    this.edit = !this.edit;
  }

}
