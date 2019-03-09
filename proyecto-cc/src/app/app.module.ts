import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HomeComponent } from './home/home.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InstalacionesService } from './instalaciones.service';
import { InstalacionesAddComponent } from './instalaciones-add/instalaciones-add.component';
import { InstalacionesGetComponent } from './instalaciones-get/instalaciones-get.component';
import { InstalacionesEditComponent } from './instalaciones-edit/instalaciones-edit.component';
import { MatDialogModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstalacionesComponent,
    MenuComponent,
    InstalacionesAddComponent,
    InstalacionesGetComponent,
    InstalacionesEditComponent,
    PersonalComponent
  ],
  entryComponents: [
    InstalacionesAddComponent,
    InstalacionesEditComponent
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
    MaterialModule
  ],
  providers: [ InstalacionesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
