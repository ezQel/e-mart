import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data/product';
import { ProductsService } from 'src/app/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string;
  products: Observable<Product[]>;

  constructor( private route: ActivatedRoute, private prodService: ProductsService) {
   }

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category');
    this.products = this.prodService.getProductsFromCategory(this.categoryName);
  }

}
