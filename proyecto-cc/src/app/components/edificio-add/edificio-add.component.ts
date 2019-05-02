import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EdificiosService } from '../../services/edificios.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edificio-add',
  templateUrl: './edificio-add.component.html',
  styleUrls: ['./edificio-add.component.css']
})
export class EdificioAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ed: EdificiosService,private  dialogRef:  MatDialogRef<EdificioAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      estatus: ['']
    });
  }
  add(clave, nombre) {
    this.ed.addEdificio(clave, nombre, 1);
    this.dialogRef.close();
  }
  ngOnInit() {}

}
