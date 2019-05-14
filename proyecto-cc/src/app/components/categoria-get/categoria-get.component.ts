import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import Categoria from '../../models/Categoria';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaEditComponent } from '../categoria-edit/categoria-edit.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-categoria-get',
  templateUrl: './categoria-get.component.html',
  styleUrls: ['./categoria-get.component.css']
})
export class CategoriaGetComponent implements OnInit {
  displayedColumns: string[] = ['clave', 'nombre', 'estatus', 'acciones'];
  dataSource: MatTableDataSource<Categoria>;
  categoria: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ed: CategoriaService,private  dialog:  MatDialog) { }

  ngOnInit() {
    this.obtenerCategorias();
  }
  edit(id): void {
    const dialogRef = this.dialog.open(CategoriaEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerCategorias();
    });
  }
  delete(id): void{
    this.ed.deleteCategoria(id).subscribe(res => {
      this.obtenerCategorias();
    });
  }
  obtenerCategorias(){
    this.ed
      .getCategorias()
      .subscribe((data: Categoria[]) => {
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

