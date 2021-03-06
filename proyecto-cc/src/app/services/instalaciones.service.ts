import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  uri = 'http://localhost:4000/instalaciones';

  constructor(private http: HttpClient) { }

  addInstalacion(clave, nombre, edificio,estatus) {
    const obj = {
      clave: clave,
      nombre: nombre,
      edificio: edificio,
      estatus: estatus
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getInstalaciones() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editInstalaciones(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateInstalacion(clave, nombre, edificio,estatus, id) {

    const obj = {
        clave: clave,
        nombre: nombre,
        edificio: edificio,
        estatus: estatus
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteInstalacion(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
