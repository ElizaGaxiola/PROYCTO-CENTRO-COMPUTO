import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InstalacionesAddComponent } from '../instalaciones-add/instalaciones-add.component';
import { InstalacionesGetComponent } from '../instalaciones-get/instalaciones-get.component';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {
  @ViewChild(InstalacionesGetComponent) instalacionesGetComponent: InstalacionesGetComponent;

  constructor(private  dialog:  MatDialog) {
    
    
  }
  agregar(): void {
    const dialogRef = this.dialog.open(InstalacionesAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.instalacionesGetComponent.obtenerInstalaciones();
    });
  }

  ngOnInit(): void {
    
  }
}