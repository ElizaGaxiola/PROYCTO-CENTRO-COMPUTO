import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import Edificio from '../Edificio';
import { EdificiosService } from '../edificios.service';
import { EdificioEditComponent } from '../edificio-edit/edificio-edit.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-edificio-get',
  templateUrl: './edificio-get.component.html',
  styleUrls: ['./edificio-get.component.css']
})
export class EdificioGetComponent implements OnInit {
  displayedColumns: string[] = ['clave', 'nombre', 'estatus', 'acciones'];
  dataSource: MatTableDataSource<Edificio>;
  edificio: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ed: EdificiosService,private  dialog:  MatDialog) { }

  ngOnInit() {
    this.obtenerEdificios();
  }
  edit(id): void {
    const dialogRef = this.dialog.open(EdificioEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerEdificios();
    });
  }
  delete(id): void{
    this.ed.deleteEdificio(id).subscribe(res => {
      this.obtenerEdificios();
    });
  }
  obtenerEdificios(){
    this.ed
      .getEdificios()
      .subscribe((data: Edificio[]) => {
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
