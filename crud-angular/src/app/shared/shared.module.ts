import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmCancelDialogComponent } from './components/confirm-cancel-dialog/confirm-cancel-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmCancelDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe,
  ]
})
export class SharedModule { }
