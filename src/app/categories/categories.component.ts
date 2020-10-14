import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Observable<any>;

  constructor( private prodService: ProductsService) {
  }

  ngOnInit(): void {
    this.categories = this.prodService.getCategories();
  }

}
