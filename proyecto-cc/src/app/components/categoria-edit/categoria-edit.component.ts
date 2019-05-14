import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
  angForm: FormGroup;
  categoria: any = {};
  id:any;
  constructor(private fb: FormBuilder,private ed: CategoriaService,private  dialogRef:  MatDialogRef<CategoriaEditComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) { 
    this.createForm();
    this.id=data.id;
    this.ed.editCategoria(data.id).subscribe(res => {
      this.categoria = res;
      this.angForm=this.fb.group({
        clave: this.categoria.clave,
        nombre: this.categoria.nombre,
        estatus: this.categoria.estatus
      });
    });
  }

  ngOnInit() {}
  update(clave,nombre,estatus){
    this.ed.updateCategoria(clave, nombre, estatus, this.id);
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

