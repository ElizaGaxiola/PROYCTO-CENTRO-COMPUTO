import { Component, OnInit, ViewChild } from '@angular/core';
import Instalaciones from '../Instalaciones';
import { InstalacionesService } from '../instalaciones.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { InstalacionesEditComponent } from '../instalaciones-edit/instalaciones-edit.component';

@Component({
  selector: 'app-instalaciones-get',
  templateUrl: './instalaciones-get.component.html',
  styleUrls: ['./instalaciones-get.component.css']
})
export class InstalacionesGetComponent implements OnInit {
  displayedColumns: string[] = ['clave', 'nombre', 'edificio', 'acciones'];
  dataSource: MatTableDataSource<Instalaciones>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ins: InstalacionesService,private  dialog:  MatDialog) {
   }

  editInstalacion(id): void {
    const dialogRef = this.dialog.open(InstalacionesEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerInstalaciones();
      console.log("obtener");
    });
  }
  deleteInstalacion(id): void{
    this.ins.deleteInstalacion(id).subscribe(res => {
      this.obtenerInstalaciones();
    });
  }
  ngOnInit() {
    this.obtenerInstalaciones();
  }
  obtenerInstalaciones(){
    this.ins
      .getInstalaciones()
      .subscribe((data: Instalaciones[]) => {
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
}

