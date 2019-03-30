import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InstalacionesService } from '../instalaciones.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';
import { EdificiosService } from '../edificios.service';
import Edificio from '../Edificio';

@Component({
  selector: 'app-instalaciones-add',
  templateUrl: './instalaciones-add.component.html',
  styleUrls: ['./instalaciones-add.component.css']
})
export class InstalacionesAddComponent implements OnInit {

  angForm: FormGroup;
  edificios: Edificio[] = [];
  
  constructor(private fb: FormBuilder,private ed: EdificiosService, private ins: InstalacionesService,private  dialogRef:  MatDialogRef<InstalacionesAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }

  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      edificio: ['', Validators.required ]
    });
  }

  addInstalaciones(clave, nombre, edificio) {
    this.ins.addInstalacion(clave, nombre, edificio,1);
    this.dialogRef.close();
  }

  getEdificios(){
    this.ed
      .getEdificios()
      .subscribe((data: Edificio[]) => {
       this.edificios = data;
    });
  }

  ngOnInit() {
    this.createForm();
    this.getEdificios();
  }

}
