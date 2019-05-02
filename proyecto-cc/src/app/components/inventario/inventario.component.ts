import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InventarioAddComponent } from '../inventario-add/inventario-add.component';
import { InventarioGetComponent } from '../inventario-get/inventario-get.component';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  @ViewChild(InventarioGetComponent) inventarioGetComponent: InventarioGetComponent;

  constructor(private  dialog:  MatDialog) { 

  }

agregar(): void {
    const dialogRef = this.dialog.open(InventarioAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //llamar a obtener inventario de instalaciones-get
      this.inventarioGetComponent.obtenerInventrio();
    });
  }  
  
  ngOnInit() {
    
  }

}
