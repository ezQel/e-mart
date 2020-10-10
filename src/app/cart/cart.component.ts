import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from '../data-model/order';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  cart: Order[];
  empty: boolean;
  loggedIn;
  total;

  constructor(private cartService: CartService,
              private user: UserService, private router: Router, private title: Title) {
  }

  ngDoCheck(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotalValue();
    this.empty = this.cart.length < 1;
    this.loggedIn = this.user.currentUser;
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Cart');
  }

  remove(id): void {
    this.cartService.remove(id);
  }

  proceed(): void {
    if (this.loggedIn){
      this.router.navigate(['/checkout']);
    }
    else {
      this.router.navigate(['/login', 'redirected']);
    }
  }

}
