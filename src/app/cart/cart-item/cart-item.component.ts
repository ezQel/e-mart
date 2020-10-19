import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/data/product';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/data/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  product: Product;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.product = this.item.product;
  }

  removeItem(): void {
    this.cart.remove(this.item.itemId);
  }

  modifyQuantity(q): void {
    this.cart.add(this.item.product, q);
  }


}
