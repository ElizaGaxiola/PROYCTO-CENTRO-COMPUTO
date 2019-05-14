import { Component, OnInit, ViewChild} from '@angular/core';
import Inventario from '../../models/Inventario';
import { InventarioEquipoService } from '../../services/inventarioEquipo.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { InventarioEquipoEditComponent } from '../inventario-equipo-edit/inventario-equipo-edit.component';
@Component({
  selector: 'app-inventario-equipo-get',
  templateUrl: './inventario-equipo-get.component.html',
  styleUrls: ['./inventario-equipo-get.component.css']
})
export class InventarioEquipoGetComponent implements OnInit {
  displayedColumns: string[] = ['tipo','serie', 'marca', 'modelo', 'procesador','discoDuro','ram','fechaRegistro','estatus','acciones'];
  dataSource: MatTableDataSource<Inventario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ins: InventarioEquipoService,private  dialog:  MatDialog) { }

  editInventario(id): void {
    const dialogRef = this.dialog.open(InventarioEquipoEditComponent, {
      width: '500px',
      data: {id: id}
    });
        
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerInventrio();
    });
  }
  deleteInventario(id): void{
    this.ins.deleteInventario(id).subscribe(res => {
      this.obtenerInventrio();
    });
  }
  obtenerInventrio(){
    this.ins
      .getInventario()
      .subscribe((data: Inventario[]) => {
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
    this.obtenerInventrio();
  }

}
