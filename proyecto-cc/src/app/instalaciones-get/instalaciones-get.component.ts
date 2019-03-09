import { Component, OnInit } from '@angular/core';
import Instalaciones from '../Instalaciones';
import { InstalacionesService } from '../instalaciones.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstalacionesEditComponent } from '../instalaciones-edit/instalaciones-edit.component';


@Component({
  selector: 'app-instalaciones-get',
  templateUrl: './instalaciones-get.component.html',
  styleUrls: ['./instalaciones-get.component.css']
})
export class InstalacionesGetComponent implements OnInit {

  instalaciones: Instalaciones[];

  constructor(private bs: InstalacionesService,private ins: InstalacionesService,private  dialog:  MatDialog) { }

  editInstalacion(id): void {
    const dialogRef = this.dialog.open(InstalacionesEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      console.log('termino');
    });
  }
  deleteInstalacion(id): void{
    this.ins.deleteInstalacion(id).subscribe(res => {
      console.log('Deleted');
    });
  }
 

  ngOnInit() {
    this.bs
      .getInstalaciones()
      .subscribe((data: Instalaciones[]) => {
        this.instalaciones = data;
    });
  }
}
