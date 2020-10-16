import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from 'src/app/data-model/product';
import { CartService } from '../cart.service';
import { Review } from 'src/app/data-model/review';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  activeTab = 'purchase';

  productReviews; // : Review[];
  product: Product;
  productId: string;
  qty = 1;

  constructor(private route: ActivatedRoute, private productService: ProductsService,
              private cart: CartService, private router: Router, private title: Title) {
  }

  ngOnInit(): void {
    this.productReviews = this.productService.getReviews('');
    this.productId = this.route.snapshot.paramMap.get('id');
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

  switchTabs(tab): void {
    if (this.activeTab === 'reviews') {
      this.productReviews = this.productService.getReviews(this.productId);
    }
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
}
