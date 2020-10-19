import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'ct/:category', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
