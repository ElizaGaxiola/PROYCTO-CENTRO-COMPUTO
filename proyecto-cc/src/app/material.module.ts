// material.module.ts

import { NgModule } from '@angular/core';

import { MatPaginatorModule,MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [MatTooltipModule,FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule,MatPaginatorModule]
})
export class MaterialModule {}