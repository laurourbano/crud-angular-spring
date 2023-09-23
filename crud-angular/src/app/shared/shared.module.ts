import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialModule } from './material/material.module';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmCancelDialogComponent } from './components/confirm-cancel-dialog/confirm-cancel-dialog.component';
import { DeleteCancelDialogComponent } from './components/delete-cancel-dialog/delete-cancel-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmCancelDialogComponent,
    DeleteCancelDialogComponent
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
