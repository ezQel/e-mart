import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/data-model/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item;
  @Output() remove = new EventEmitter();
  product: Product;

  constructor(private prodService: ProductsService, private cart: CartService) { }

  ngOnInit(): void {
    this.product = this.item.product;
  }

  removeItem(): void {
    this.remove.emit();
  }

  modifyQuantity(q): void {
    this.cart.add(this.item.product, q);
  }


}
