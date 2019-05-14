import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  uri = 'http://localhost:4000/categoria';

  constructor(private http: HttpClient) { }

  addCategoria(clave, nombre, estatus) {
    const obj = {
      clave: clave,
      nombre: nombre,
      estatus: estatus
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getCategorias() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editCategoria(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);   
  }
  updateCategoria(clave, nombre, estatus, id) {

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
  deleteCategoria(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
