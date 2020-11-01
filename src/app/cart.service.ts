import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/data/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[];

  constructor() {
    const savedCart = localStorage.getItem('cart');
    this.cart = (savedCart) ? JSON.parse(savedCart) : [];
  }

  add(prdct, qty: number): void{
    const item: CartItem = {
      itemId: new Date().getMilliseconds(),
      product: {
        key: prdct.key,
        name: prdct.name,
        price: prdct.price,
        customExtras: prdct.customExtras,
        imageurl: prdct.imageurl
      },
      quantity: qty,
      value: (prdct.price * qty),
    };

    const index = this.cart.findIndex(o => o.product.key === prdct.key);

    if (index > -1) {
      this.cart.splice(index, 1, item);
    }
    else{
      this.cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  remove(id): void{
    this.cart = this.cart.filter(i => i.itemId !== id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
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

}
