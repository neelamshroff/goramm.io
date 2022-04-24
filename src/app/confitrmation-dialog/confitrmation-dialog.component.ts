import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-confitrmation-dialog',
  templateUrl: './confitrmation-dialog.component.html',
  styleUrls: ['./confitrmation-dialog.component.css']
})
export class ConfitrmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfitrmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}