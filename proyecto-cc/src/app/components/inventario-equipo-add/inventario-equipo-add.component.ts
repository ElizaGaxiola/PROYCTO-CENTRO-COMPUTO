import { Component, OnInit,Inject, Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InventarioEquipoService } from '../../services/inventarioEquipo.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';
import Tipo from '../../models/Tipo';
@Component({
  selector: 'app-inventario-equipo-add',
  templateUrl: './inventario-equipo-add.component.html',
  styleUrls: ['./inventario-equipo-add.component.css']
})
export class InventarioEquipoAddComponent implements OnInit {

  angForm: FormGroup;
  tipos: Tipo[] = [
    {value: 'CPU', viewValue: 'CPU'},
    {value: 'MONITOR', viewValue: 'MONITOR'},
    {value: 'PROYECTOR', viewValue: 'PROYECTOR'}
  ];

  constructor(private fb: FormBuilder, private ins: InventarioEquipoService,private  dialogRef:  MatDialogRef<InventarioEquipoAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
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
    console.log(tipo,serie, marca, modelo,procesador,discoDuro,ram,fechaRegistro,1);
    this.ins.addInventario(tipo,serie, marca, modelo,procesador,discoDuro,ram,fechaRegistro,1);
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
