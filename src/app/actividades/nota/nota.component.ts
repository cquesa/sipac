import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent {

  @ViewChild("inputHoras") inputHoras;
 
  constructor( public dialogRef: MatDialogRef<NotaComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      console.log(data.dia);
  }
 
  ngOnInit(): void {
    setTimeout(() => {
      this.inputHoras.nativeElement.focus();
    }, 300);
   }
  
 
  onNoClick(): void {
    this.dialogRef.close();
  }

}