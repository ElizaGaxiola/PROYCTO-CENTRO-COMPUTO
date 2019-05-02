import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UsuarioAddComponent } from '../usuario-add/usuario-add.component';
import { UsuarioGetComponent } from '../usuario-get/usuario-get.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @ViewChild(UsuarioGetComponent) usuarioGetComponent: UsuarioGetComponent;
  constructor(private  dialog:  MatDialog) { }
  agregar(): void {
    const dialogRef = this.dialog.open(UsuarioAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //llamar a obtener inventario de instalaciones-get
      this.usuarioGetComponent.obtenerUsuario();
    });
  }  
  
  ngOnInit() {
  }

}
