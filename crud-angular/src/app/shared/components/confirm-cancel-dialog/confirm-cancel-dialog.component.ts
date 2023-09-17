import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-cancel-dialog',
  templateUrl: './confirm-cancel-dialog.component.html',
  styleUrls: ['./confirm-cancel-dialog.component.scss']
})
export class ConfirmCancelDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public mensagem: string) { }

}
