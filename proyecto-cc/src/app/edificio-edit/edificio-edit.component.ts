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
  constructor(private fb: FormBuilder,private ed: EdificiosService,private  dialogRef:  MatDialogRef<EdificioEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.createForm();
    this.id=data.id;
    this.ed.editEdificio(data.id).subscribe(res => {
      this.edificio = res;
      this.angForm=this.fb.group({
        clave: this.edificio.clave,
        nombre: this.edificio.nombre,
        estatus: this.edificio.estatus
      });
    });
  }

  ngOnInit() {}
  update(clave,nombre,estatus){
    this.ed.updateEdificio(clave, nombre, estatus, this.id);
    this.dialogRef.close();
  }

  createForm() {
    this.angForm = this.fb.group({
      clave: ['', Validators.required ],
      nombre: ['', Validators.required ],
      estatus: ['', Validators.required ],
    });
  }

}
