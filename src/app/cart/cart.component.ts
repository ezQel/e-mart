import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Fechi | Cart');
  }

}
