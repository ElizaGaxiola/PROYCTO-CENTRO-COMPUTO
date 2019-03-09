import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InstalacionesService } from '../instalaciones.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import Instalaciones from '../Instalaciones';
@Component({
  selector: 'app-instalaciones-edit',
  templateUrl: './instalaciones-edit.component.html',
  styleUrls: ['./instalaciones-edit.component.css']
})
export class InstalacionesEditComponent implements OnInit {

  angForm: FormGroup;
  instalacion: any = {};
  id:any;

  constructor(private fb: FormBuilder,private ins: InstalacionesService,private  dialogRef:  MatDialogRef<InstalacionesEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.createForm();
    this.id=data.id;
    console.log(data.id);
    this.ins.editInstalaciones(data.id).subscribe(res => {
      this.instalacion = res;
    });
  }

  ngOnInit() {
    
  }

 

  updateInstalacion(clave,nombre,edificio){
      this.ins.updateInstalacion(clave, nombre, edificio, this.id);
  }

  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      edificio: ['', Validators.required ]
    });
  }

  public  closeMe() {
    this.dialogRef.close();
  }

}
