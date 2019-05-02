import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { from } from 'rxjs';
import { EdificioComponent } from './components/edificio/edificio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'instalaciones',
    component: InstalacionesComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent
  },
  {
    path: 'edificios',
    component: EdificioComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
