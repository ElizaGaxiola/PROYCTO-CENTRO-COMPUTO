import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InstalacionesService } from '../instalaciones.service';
import {MatDialogRef, MAT_DIALOG_DATA} from  '@angular/material';


@Component({
  selector: 'app-instalaciones-add',
  templateUrl: './instalaciones-add.component.html',
  styleUrls: ['./instalaciones-add.component.css']
})
export class InstalacionesAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ins: InstalacionesService,private  dialogRef:  MatDialogRef<InstalacionesAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      edificio: ['', Validators.required ]
    });
  }

  addInstalaciones(clave, nombre, edificio) {
    this.ins.addInstalacion(clave, nombre, edificio);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
