import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaGetComponent } from '../categoria-get/categoria-get.component';
import { MatDialog } from '@angular/material';
import { CategoriaAddComponent } from '../categoria-add/categoria-add.component';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @ViewChild(CategoriaGetComponent) categoriaGetComponent: CategoriaGetComponent;
  constructor(private  dialog:  MatDialog) { }

  ngOnInit() {}

  agregar(): void {
    const dialogRef = this.dialog.open(CategoriaAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //llamar a obtener edificios 
      this.categoriaGetComponent.obtenerCategorias();
    });
  }
}
