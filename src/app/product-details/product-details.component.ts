import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from 'src/app/data/product';
import { CartService } from '../cart.service';
import { Review } from 'src/app/data/review';
import { Title } from '@angular/platform-browser';
import { Extra } from '../data/extra';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  activeTab = 'purchase';
  productReviews: Review[];
  product: Product;
  productId: string;
  qty = 1;
  showChoices: boolean;

  constructor(private route: ActivatedRoute, private productService: ProductsService,
              private cart: CartService, private router: Router, private title: Title) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getReviews(this.productId)
    .subscribe( r => {
      this.productReviews = r;
    }
    );
    this.productService.get(this.productId)
    .subscribe( p => {
      this.product = p;
      this.title.setTitle(`Fechi | ${this.product.name.substr(0, 20)}...`);
    });
  }

  getClasses(tab: string): any {
    return {
      'tab-item': true,
      active: this.activeTab === tab
    };
  }

  getAverageRating(reviews: Review[]): number {
    return reviews.map(r => r.rating).reduce((p, c) => p + c, 0) / reviews.length;
  }

  switchTabs(tab): void {
    this.activeTab = tab;
  }

  addToCart(): void {
    this.cart.add(this.product, this.qty);
  }

  orderNow(): void {
    this.cart.add(this.product, this.qty);
    this.router.navigate(['cart']);
  }

  setQuantity(q): void {
    this.qty = q;
  }

  customize(customExtras: Extra[]): void{
    this.showChoices = !this.showChoices;

    if (customExtras) {
      this.product.customExtras = customExtras;
    }
  }

}
