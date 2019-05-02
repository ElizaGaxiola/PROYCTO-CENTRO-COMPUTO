import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import Tipo from '../../models/Tipo';
@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
 
  angForm: FormGroup;
  usuario: any = {};
  id:any;
  tipos: Tipo[] = [
    {value: 'ADMINISTRADOR', viewValue: 'ADMINISTRADOR'},
    {value: 'DOCENTE', viewValue: 'DOCENTE'},
    {value: 'ALUMNO', viewValue: 'ALUMNO'}
  ];
  array: any[] = [
    {value: '0', viewValue: 'Inactivo'},
    {value: '1', viewValue: 'Activo'}
  ];
  constructor(private fb: FormBuilder,private ins:UsuarioService,private  dialogRef:  MatDialogRef<UsuarioEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.id=data.id;
    this.ins.editUsuario(data.id).subscribe(res => {
      this.usuario = res;
      console.log(res);
      this.angForm=this.fb.group({
        tipo: this.usuario.tipo,
        matricula: this.usuario.matricula,
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        password: this.usuario.password,
        estatus: this.usuario.estatus
      });
    });
  }

  ngOnInit() {
    this.createForm();
  }
  updateUsuario(tipo,matricula,nombre,apellido,password,estatus){
    this.ins.updateUsuario(tipo,matricula,nombre,apellido,password,estatus, this.id);
    this.dialogRef.close();
}

createForm() {
  this.angForm = this.fb.group({
    tipo: ['', Validators.required ],
    matricula: ['', Validators.required ],
    nombre: ['', Validators.required ],
    apellido: ['', Validators.required ],
    password: ['', Validators.required ],
    estatus: ['', Validators.required ]
  });
}

}