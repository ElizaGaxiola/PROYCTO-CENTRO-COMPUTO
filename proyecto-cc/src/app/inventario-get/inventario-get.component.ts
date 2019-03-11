import { Component, OnInit } from '@angular/core';
import Inventario from '../Inventario';
import { InventarioService } from '../inventario.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InventarioEditComponent } from '../inventario-edit/inventario-edit.component';
@Component({
  selector: 'app-inventario-get',
  templateUrl: './inventario-get.component.html',
  styleUrls: ['./inventario-get.component.css']
})
export class InventarioGetComponent implements OnInit {
  inventarios: Inventario[];
  constructor(private bs: InventarioService,private ins: InventarioService,private  dialog:  MatDialog) { }

  editInventario(id): void {
    const dialogRef = this.dialog.open(InventarioEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      console.log('termino');
    });
  }
  deleteInventario(id): void{
    this.ins.deleteInventario(id).subscribe(res => {
      console.log('Deleted');
    });
  }
 

  ngOnInit() {
    this.bs
      .getInventario()
      .subscribe((data: Inventario[]) => {
        this.inventarios = data;
    });
  }

}
