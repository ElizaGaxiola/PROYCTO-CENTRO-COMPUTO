import { Component, OnInit, ViewChild } from '@angular/core';
import { EdificioGetComponent } from '../edificio-get/edificio-get.component';
import { MatDialog } from '@angular/material';
import { EdificioAddComponent } from '../edificio-add/edificio-add.component';

@Component({
  selector: 'app-edificio',
  templateUrl: './edificio.component.html',
  styleUrls: ['./edificio.component.css']
})
export class EdificioComponent implements OnInit {
  @ViewChild(EdificioGetComponent) edificioGetComponent: EdificioGetComponent;
  constructor(private  dialog:  MatDialog) { }

  ngOnInit() {}

  agregar(): void {
    const dialogRef = this.dialog.open(EdificioAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //llamar a obtener edificios 
      this.edificioGetComponent.obtenerEdificios();
    });
  }

}
