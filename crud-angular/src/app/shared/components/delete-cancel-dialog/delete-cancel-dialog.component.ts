import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-cancel-dialog',
  templateUrl: './delete-cancel-dialog.component.html',
  styleUrls: ['./delete-cancel-dialog.component.scss']
})
export class DeleteCancelDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public mensagem: string) { }

}
