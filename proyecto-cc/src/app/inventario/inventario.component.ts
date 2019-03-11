import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InventarioAddComponent } from '../inventario-add/inventario-add.component';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private  dialog:  MatDialog) { 

  }

agregar(): void {
    const dialogRef = this.dialog.open(InventarioAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('termino');
      this.ngOnInit();
    });
  }  
  
  ngOnInit() {
    
  }

}
