import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { PropsModule } from '../props/props.module';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    PropsModule,
  ]
})
export class CategoriesModule { }
