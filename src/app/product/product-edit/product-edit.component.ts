import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  public id!: number;
  categories : Category[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router : Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.categories = this.categoryService.getCategories()
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter.id
    })
    let name = "";
    let categoryname = "";
    let price = "";
    let product = this.productService.findById(this.id);
    console.log(product);
    if(product!=null){
      name = product['name'];
      categoryname = product['category'];
      price = product['price'];
    }
    this.form = this.fb.group({
      name: [name, [Validators.required]],
      category: [categoryname, [Validators.required]],
      price: [price, [Validators.required]]
    });

  }

  saveDetails(form: { value: any; }) {
    this.productService.updateProduct(this.id, form.value.name, form.value.category, form.value.price);
    this.router.navigate(["product"])
  }

}