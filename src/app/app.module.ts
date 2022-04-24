import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryService } from './category/category.service';
import { ConfitrmationDialogComponent } from './confitrmation-dialog/confitrmation-dialog.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './product/product.service';

@NgModule({
  exports : [
  ],
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryListComponent,
    ConfitrmationDialogComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule, MatDialogModule,
    MatSelectModule
  ],
  providers: [CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
