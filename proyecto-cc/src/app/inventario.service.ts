import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  uri = 'http://localhost:4000/inventario';

  constructor(private http: HttpClient) { }
  addInventario(serie, marca, modelo, procesador, fechaRegistro,estatus) {
    const obj = {
      serie: serie,
      marca: marca,
      modelo: modelo,
      procesador: procesador,
      fechaRegistro: fechaRegistro,
      estatus: estatus

    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getInventario() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editInventario(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateInventario(serie, marca, modelo, procesador, fechaRegistro,estatus, id) {

    const obj = {
      serie: serie,
      marca: marca,
      modelo: modelo,
      procesador: procesador,
      fechaRegistro: fechaRegistro,
      estatus: estatus
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteInventario(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
