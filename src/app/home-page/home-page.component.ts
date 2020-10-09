import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products;

  constructor( private prodService: ProductsService, private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Fechi');
    this.products = this.prodService.getPopular();
  }

}
