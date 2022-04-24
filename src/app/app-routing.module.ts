import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {
  CategoryComponent
} from './category/category.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {
  ProductComponent
} from './product/product.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'categories'
  },
  {
    path: 'categories',
    component: CategoryComponent,
    children: [
      {
        path: '',
        component: CategoryListComponent
      },{
        path: 'new',
        component: CategoryAddComponent
      },
      {
        path: ':id/edit',
        component: CategoryEditComponent
      }
    ]
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },{
        path: 'new',
        component: ProductAddComponent
      },
      {
        path: ':id/edit',
        component: ProductEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
