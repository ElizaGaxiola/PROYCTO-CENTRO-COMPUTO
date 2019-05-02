import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdificiosService {

  uri = 'http://localhost:4000/edificio';

  constructor(private http: HttpClient) { }

  addEdificio(clave, nombre, estatus) {
    const obj = {
      clave: clave,
      nombre: nombre,
      estatus: estatus
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getEdificios() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editEdificio(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);   
  }
  updateEdificio(clave, nombre, estatus, id) {

    const obj = {
        clave: clave,
        nombre: nombre,
        estatus: estatus
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
      return this
      .http
      .get(`${this.uri}/edit/${id}`); 
  }
  deleteEdificio(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
