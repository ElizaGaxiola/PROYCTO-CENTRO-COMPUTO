import { Component, OnInit,Inject, Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';
import Tipo from '../../models/Tipo';
@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {
  angForm: FormGroup;
  tipos: Tipo[] = [
    {value: 'ADMINISTRADOR', viewValue: 'ADMINISTRADOR'},
    {value: 'DOCENTE', viewValue: 'DOCENTE'},
    {value: 'ALUMNO', viewValue: 'ALUMNO'},
  ];
  constructor(private fb: FormBuilder, private ins: UsuarioService,private  dialogRef:  MatDialogRef<UsuarioAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      tipo: ['', Validators.required ],
      matricula: ['', Validators.required ],
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }
  addUsuario(tipo,matricula, nombre, apellido,password) {
    console.log(tipo,matricula, nombre, apellido,password,1);
    this.ins.addUsuario(tipo,matricula, nombre, apellido,password,1);
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
