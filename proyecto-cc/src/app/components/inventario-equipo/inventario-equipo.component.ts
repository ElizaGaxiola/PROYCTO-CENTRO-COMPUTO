import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InventarioEquipoAddComponent } from '../inventario-equipo-add/inventario-equipo-add.component';
import { InventarioEquipoGetComponent } from '../inventario-equipo-get/inventario-equipo-get.component';
@Component({
  selector: 'app-inventario-equipo',
  templateUrl: './inventario-equipo.component.html',
  styleUrls: ['./inventario-equipo.component.css']
})
export class InventarioEquipoComponent implements OnInit {

  @ViewChild(InventarioEquipoGetComponent) inventarioGetComponent: InventarioEquipoGetComponent;

  constructor(private  dialog:  MatDialog) { 

  }

agregar(): void {
    const dialogRef = this.dialog.open(InventarioEquipoAddComponent, {
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
