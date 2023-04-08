import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  user: {
    name: string,
    lastName: string,
  }
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  constructor(
    @Inject (MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
