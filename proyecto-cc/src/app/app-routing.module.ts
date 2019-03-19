import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { InventarioComponent } from './inventario/inventario.component';
import { from } from 'rxjs';
import { EdificioComponent } from './edificio/edificio.component';

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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
