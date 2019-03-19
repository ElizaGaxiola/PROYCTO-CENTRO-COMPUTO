import { Component, OnInit,Inject, Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InventarioService } from '../inventario.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';
@Component({
  selector: 'app-inventario-add',
  templateUrl: './inventario-add.component.html',
  styleUrls: ['./inventario-add.component.css']
})
export class InventarioAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ins: InventarioService,private  dialogRef:  MatDialogRef<InventarioAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      serie: ['', Validators.required ],
      marca: ['', Validators.required ],
      modelo: ['', Validators.required ],
      procesador: ['', Validators.required ],
      fechaRegistro: ['', Validators.required ]
    });
  }

  addInventario(serie, marca, modelo,procesador,fechaRegistro) {
    console.log(serie, marca, modelo,procesador,fechaRegistro,'Activo');
    this.ins.addInventario(serie, marca, modelo,procesador,fechaRegistro,'Activo');
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
