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
import { InventarioComponent } from './components/inventario/inventario.component';
import { InventarioService } from './services/inventario.service';
import { InventarioAddComponent } from './components/inventario-add/inventario-add.component';
import { InventarioGetComponent } from './components/inventario-get/inventario-get.component';
import { InventarioEditComponent } from './components/inventario-edit/inventario-edit.component';
import { EdificioComponent } from './components/edificio/edificio.component';
import { EdificioAddComponent } from './components/edificio-add/edificio-add.component';
import { EdificioEditComponent } from './components/edificio-edit/edificio-edit.component';
import { EdificioGetComponent } from './components/edificio-get/edificio-get.component';
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
import { EdificiosService } from './services/edificios.service';

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
    InventarioComponent,
    InventarioAddComponent,
    InventarioGetComponent,
    InventarioEditComponent,
    EdificioComponent,
    EdificioAddComponent,
    EdificioEditComponent,
    EdificioGetComponent,
    LoginComponent

  ],
  entryComponents: [
    InstalacionesAddComponent,
    InstalacionesEditComponent,
    InventarioAddComponent,
    InventarioEditComponent,
    EdificioAddComponent,
    EdificioEditComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
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
  providers: [ InstalacionesService,InventarioService,UsuarioService,EdificiosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
