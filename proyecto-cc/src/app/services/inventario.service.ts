import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  uri = 'http://localhost:4000/inventario';

  constructor(private http: HttpClient) { }
  addInventario(tipo,serie, marca, modelo, procesador,discoDuro,ram, fechaRegistro,estatus) {
    const obj = {
      tipo: tipo,
      serie: serie,
      marca: marca,
      modelo: modelo,
      procesador: procesador,
      discoDuro:discoDuro,
      ram:ram,
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
  updateInventario(tipo,serie, marca, modelo, procesador,discoDuro,ram, fechaRegistro,estatus, id) {

    const obj = {
      tipo: tipo,
      serie: serie,
      marca: marca,
      modelo: modelo,
      procesador: procesador,
      discoDuro:discoDuro,
      ram:ram,
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
