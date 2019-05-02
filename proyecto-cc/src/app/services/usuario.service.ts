import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  uri = 'http://localhost:4000/usuario';

  constructor(private http: HttpClient) { }
  addUsuario(tipo,matricula, nombre, apellido, password,estatus) {
    const obj = {
      tipo: tipo,
      matricula: matricula,
      nombre: nombre,
      apellido: apellido,
      password: password,
      estatus: estatus

    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getUsuario() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editUsuario(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateUsuario(tipo,matricula, nombre, apellido, password,estatus, id) {

    const obj = {
      tipo: tipo,
      matricula: matricula,
      nombre: nombre,
      apellido: apellido,
      password: password,
      estatus: estatus
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteUsuario(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
