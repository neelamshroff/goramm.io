import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form!: FormGroup;
  categories : Category[] = [];

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router : Router) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      category: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });
  }

  saveDetails(form: { value: any; }) {
    this.productService.addProduct(form.value.name, form.value.category, form.value.price);
    this.router.navigate(["product"])
  }

}
