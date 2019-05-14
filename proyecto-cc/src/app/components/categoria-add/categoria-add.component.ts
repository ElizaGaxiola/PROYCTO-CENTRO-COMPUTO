import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ed: CategoriaService,private  dialogRef:  MatDialogRef<CategoriaAddComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
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
    this.ed.addCategoria(clave, nombre, 1);
    this.dialogRef.close();
  }
  ngOnInit() {}

}

