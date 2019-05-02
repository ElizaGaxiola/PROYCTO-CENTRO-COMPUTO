import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InstalacionesService } from '../../services/instalaciones.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';
import Edificio from '../../models/Edificio';
import { EdificiosService } from '../../services/edificios.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-instalaciones-edit',
  templateUrl: './instalaciones-edit.component.html',
  styleUrls: ['./instalaciones-edit.component.css']
})
export class InstalacionesEditComponent implements OnInit {

  angForm: FormGroup;
  instalacion: any = {};
  edificios: Edificio[] = [];
  id:any;
  array: any[] = [
    {value: '0', viewValue: 'Inactivo'},
    {value: '1', viewValue: 'Activo'}
  ];

  constructor(private ed: EdificiosService,private fb: FormBuilder,private ins: InstalacionesService,private  dialogRef:  MatDialogRef<InstalacionesEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.id=data.id;
    this.ins.editInstalaciones(data.id).subscribe(res => {
      this.instalacion = res;
      console.log(res);
      this.angForm=this.fb.group({
        clave: this.instalacion.clave,
        nombre: this.instalacion.nombre,
        edificio: this.instalacion.edificio,
        estatus: this.instalacion.estatus
      });
    });
  }
  
  ngOnInit() {
    this.createForm();
    this.getEdificios();    
  }

  updateInstalacion(clave,nombre,edificio,estatus){
      this.ins.updateInstalacion(clave, nombre, edificio,estatus, this.id);
      this.dialogRef.close();
  }

  getEdificios(){
    this.ed
      .getEdificios()
      .subscribe((data: Edificio[]) => {
       this.edificios = data;
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      edificio: ['', Validators.required ],
      estatus: ['', Validators.required ]
    });
  }

}
