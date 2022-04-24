import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private categoryService: CategoryService,
    private router : Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]]
    });
  }

  saveDetails(form: { value: any; }) {
    this.categoryService.addCategory(form.value.name);
    this.router.navigate(["categories"])
  }
}
