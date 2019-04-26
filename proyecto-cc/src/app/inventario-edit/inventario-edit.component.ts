import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InventarioService } from '../inventario.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import Tipo from '../Tipo';
@Component({
  selector: 'app-inventario-edit',
  templateUrl: './inventario-edit.component.html',
  styleUrls: ['./inventario-edit.component.css']
})
export class InventarioEditComponent implements OnInit {
 
  angForm: FormGroup;
  inventario: any = {};
  id:any;
  tipos: Tipo[] = [
    {value: 'CPU', viewValue: 'CPU'},
    {value: 'MONITOR', viewValue: 'MONITOR'},
    {value: 'PROYECTOR', viewValue: 'PROYECTOR'}
  ];
  array: any[] = [
    {value: '0', viewValue: 'Inactivo'},
    {value: '1', viewValue: 'Activo'}
  ];
  constructor(private fb: FormBuilder,private ins: InventarioService,private  dialogRef:  MatDialogRef<InventarioEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.id=data.id;
    this.ins.editInventario(data.id).subscribe(res => {
      this.inventario = res;
      console.log(res);
      this.angForm=this.fb.group({
        tipo: this.inventario.tipo,
        serie: this.inventario.serie,
        marca: this.inventario.marca,
        modelo: this.inventario.modelo,
        procesador: this.inventario.procesador,
        discoDuro: this.inventario.discoDuro,
        ram: this.inventario.ram,
        fechaRegistro: this.inventario.fechaRegistro,
        estatus: this.inventario.estatus
      });
    });
  }

  ngOnInit() {
    this.createForm();
  }
  updateInventario(tipo,serie,marca,modelo,procesador,discoDuro,ram,fechaRegistro,estatus){
    this.ins.updateInventario(tipo,serie,marca,modelo,procesador,discoDuro,ram,fechaRegistro,estatus, this.id);
    this.dialogRef.close();
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
    fechaRegistro: ['', Validators.required ],
    estatus: ['', Validators.required ]
  });
}

}
