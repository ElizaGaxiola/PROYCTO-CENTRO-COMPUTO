import { Component, OnInit,Inject, Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InventarioService } from '../inventario.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';
import Tipo from '../Tipo';
@Component({
  selector: 'app-inventario-add',
  templateUrl: './inventario-add.component.html',
  styleUrls: ['./inventario-add.component.css']
})
export class InventarioAddComponent implements OnInit {

  angForm: FormGroup;
  tipos: Tipo[] = [
    {value: 'CPU', viewValue: 'CPU'},
    {value: 'MONITOR', viewValue: 'MONITOR'},
    {value: 'PROYECTOR', viewValue: 'PROYECTOR'}
  ];

  constructor(private fb: FormBuilder, private ins: InventarioService,private  dialogRef:  MatDialogRef<InventarioAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      tipo: ['', Validators.required ],
      serie: ['', Validators.required ],
      marca: ['', Validators.required ],
      modelo: ['', Validators.required ],
      procesador: [''],
      discoDuro: [''],
      ram: [''],
      fechaRegistro: ['', Validators.required ]
    });
  }

  addInventario(tipo,serie, marca, modelo,procesador,discoDuro,ram,fechaRegistro) {
    console.log(tipo,serie, marca, modelo,procesador,discoDuro,ram,fechaRegistro,'Activo');
    this.ins.addInventario(tipo,serie, marca, modelo,procesador,discoDuro,ram,fechaRegistro,'Activo');
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
