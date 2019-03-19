import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EdificiosService } from '../edificios.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edificio-edit',
  templateUrl: './edificio-edit.component.html',
  styleUrls: ['./edificio-edit.component.css']
})
export class EdificioEditComponent implements OnInit {
  angForm: FormGroup;
  edificio: any = {};
  id:any;
  constructor(private fb: FormBuilder,private ed: EdificiosService,private  dialogRef:  MatDialogRef<EdificioEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit() {
    this.createForm();
  }
  updateInstalacion(clave,nombre){
    this.ed.updateEdificio(clave, nombre, 1, this.id);
    this.dialogRef.close();
  }

  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      estatus: ['']
    });
  }

}
