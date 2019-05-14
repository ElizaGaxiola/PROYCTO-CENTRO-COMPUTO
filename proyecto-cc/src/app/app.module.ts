import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstalacionesService } from './services/instalaciones.service';
import { InstalacionesAddComponent } from './components/instalaciones-add/instalaciones-add.component';
import { InstalacionesGetComponent } from './components/instalaciones-get/instalaciones-get.component';
import { InstalacionesEditComponent } from './components/instalaciones-edit/instalaciones-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioAddComponent } from './components/usuario-add/usuario-add.component';
import { UsuarioGetComponent } from './components/usuario-get/usuario-get.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioService } from './services/usuario.service';
import { InventarioEquipoComponent } from './components/inventario-equipo/inventario-equipo.component';
import { InventarioEquipoService } from './services/inventarioEquipo.service';
import { InventarioEquipoAddComponent } from './components/inventario-equipo-add/inventario-equipo-add.component';
import { InventarioEquipoGetComponent } from './components/inventario-equipo-get/inventario-equipo-get.component';
import { InventarioEquipoEditComponent } from './components/inventario-equipo-edit/inventario-equipo-edit.component';
import { EdificioComponent } from './components/edificio/edificio.component';
import { EdificioAddComponent } from './components/edificio-add/edificio-add.component';
import { EdificioEditComponent } from './components/edificio-edit/edificio-edit.component';
import { EdificioGetComponent } from './components/edificio-get/edificio-get.component';
import { EdificiosService } from './services/edificios.service';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CategoriaAddComponent } from './components/categoria-add/categoria-add.component';
import { CategoriaEditComponent } from './components/categoria-edit/categoria-edit.component';
import { CategoriaGetComponent } from './components/categoria-get/categoria-get.component';
import { CategoriaService } from './services/categoria.service';
import { LoginComponent } from './components/login/login.component';
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstalacionesComponent,
    MenuComponent,
    InstalacionesAddComponent,
    InstalacionesGetComponent,
    InstalacionesEditComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
    UsuarioGetComponent,
    InventarioEquipoComponent,
    InventarioEquipoAddComponent,
    InventarioEquipoGetComponent,
    InventarioEquipoEditComponent,
    EdificioComponent,
    EdificioAddComponent,
    EdificioEditComponent,
    EdificioGetComponent,
    CategoriaComponent,
    CategoriaAddComponent,
    CategoriaEditComponent,
    CategoriaGetComponent,
    LoginComponent

  ],
  entryComponents: [
    InstalacionesAddComponent,
    InstalacionesEditComponent,
    InventarioEquipoAddComponent,
    InventarioEquipoEditComponent,
    EdificioAddComponent,
    EdificioEditComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
    CategoriaAddComponent,
    CategoriaEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatFormFieldModule,
    MatDialogModule,
    MaterialModule,
    MatSortModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [ InstalacionesService,InventarioEquipoService,UsuarioService,EdificiosService,CategoriaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
