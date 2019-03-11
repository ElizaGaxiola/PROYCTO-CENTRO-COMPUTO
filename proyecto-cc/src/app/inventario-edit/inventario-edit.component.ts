import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InventarioService } from '../inventario.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import Inventario from '../Inventario';
@Component({
  selector: 'app-inventario-edit',
  templateUrl: './inventario-edit.component.html',
  styleUrls: ['./inventario-edit.component.css']
})
export class InventarioEditComponent implements OnInit {
 
  angForm: FormGroup;
  inventario: any = {};
  id:any;

  constructor(private fb: FormBuilder,private ins: InventarioService,private  dialogRef:  MatDialogRef<InventarioEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.createForm();
    this.id=data.id;
    console.log(data.id);
    this.ins.editInventario(data.id).subscribe(res => {
      this.inventario = res;
    });
  }

  ngOnInit() {
  }
  updateInventario(serie,marca,modelo,procesador,fechaRegistro,estatus){
    this.ins.updateInventario(serie, marca, modelo,procesador,fechaRegistro,estatus, this.id);
}

createForm() {
  this.angForm = this.fb.group({
    serie: ['', Validators.required ],
    marca: ['', Validators.required ],
    modelo: ['', Validators.required ],
    procesador: ['', Validators.required ],
    fechaRegistro: ['', Validators.required ],
    estatus: ['', Validators.required ]
  });
}

public  closeMe() {
  this.dialogRef.close();
}
}
