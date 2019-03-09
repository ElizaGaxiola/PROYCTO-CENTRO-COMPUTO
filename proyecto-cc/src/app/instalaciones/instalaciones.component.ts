import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstalacionesAddComponent } from '../instalaciones-add/instalaciones-add.component';


@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {
  

  constructor(private  dialog:  MatDialog) {
    
  }
  agregar(): void {
    const dialogRef = this.dialog.open(InstalacionesAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('termino');
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
  
  }

}
