import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  form!: FormGroup;
  public id!: number;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router : Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter.id
    })
    let name = "";
    let category = this.categoryService.findById(this.id);
    console.log(category);
    if(category!=null){
      name = category['name'];
    }
    this.form = this.fb.group({
      name: [name, [Validators.required]]
    });

  }

  saveDetails(form: { value: any; }) {
    this.categoryService.updateCategory(this.id, form.value.name);
    this.router.navigate(["categories"])
  }

}
