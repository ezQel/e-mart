import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data-model/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string;
  products;

  constructor( private route: ActivatedRoute, private prodService: ProductsService) {
    this.categoryName = this.route.snapshot.paramMap.get('name');
    this.products = prodService.getProductsFromCategory(this.categoryName);
   }

  ngOnInit(): void {
  }

}
