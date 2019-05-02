import { Component, OnInit, ViewChild} from '@angular/core';
import Usuario from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsuarioEditComponent } from '../usuario-edit/usuario-edit.component';
@Component({
  selector: 'app-usuario-get',
  templateUrl: './usuario-get.component.html',
  styleUrls: ['./usuario-get.component.css']
})
export class UsuarioGetComponent implements OnInit {
  displayedColumns: string[] = ['tipo','matricula', 'nombre', 'apellido', 'password','estatus','acciones'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ins: UsuarioService,private  dialog:  MatDialog) { }

  editUsuario(id): void {
    const dialogRef = this.dialog.open(UsuarioEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerUsuario();
    });
  }
  deleteUsuario(id): void{
    this.ins.deleteUsuario(id).subscribe(res => {
      this.obtenerUsuario();
    });
  }
  obtenerUsuario(){
    this.ins
      .getUsuario()
      .subscribe((data: Usuario[]) => {
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.obtenerUsuario();
  }

}
