import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfitrmationDialogComponent } from 'src/app/confitrmation-dialog/confitrmation-dialog.component';
import { Category, CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'star'];
  @ViewChild('myTable') myTable!: MatTable<any>;

  categories : Category[] = []
  constructor(
    private categoryService: CategoryService,
    private router : Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories)
  }

  editCategory(category : Category){
    console.log(category);
    this.router.navigate(["categories", category.id, "edit"])
  }

  deleteCategory(category : Category){
    console.log(category);
    const dialogRef = this.dialog.open(ConfitrmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result == true){
        this.categoryService.deleteCategory(category.id);
        this.categories = this.categoryService.getCategories();
        this.myTable.renderRows();
      }
    });
  }

}
