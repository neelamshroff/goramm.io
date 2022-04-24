import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfitrmationDialogComponent } from 'src/app/confitrmation-dialog/confitrmation-dialog.component';
import { Product, ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'star'];
  @ViewChild('myTable') myTable!: MatTable<any>;

  products : Product[] = []
  constructor(
    private productService: ProductService,
    private router : Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products)
  }

  editCategory(product : Product){
    console.log(product);
    this.router.navigate(["product", product.id, "edit"])
  }

  deleteCategory(product : Product){
    console.log(product);
    const dialogRef = this.dialog.open(ConfitrmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result == true){
        this.productService.deleteProduct(product.id);
        this.products = this.productService.getProducts();
        this.myTable.renderRows();
      }
    });
  }
}
