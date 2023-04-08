import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './my-dialogs/user-dialog/user-dialog.component';
import { FoodDialogComponent } from './my-dialogs/food-dialog/food-dialog.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  constructor(
    private dialogService: MatDialog
  ) {}

  openUserDialog(): void {
    
    const dialogo = this.dialogService.open(UserDialogComponent, {
      data: {
        user: {
          name:'Alejandro Jesús',
          lastName: 'Serrano',
        }
      }
    });

    dialogo.afterClosed()
      .subscribe(console.log)

  }

  openFoodDialog():void {
    this.dialogService.open(FoodDialogComponent)
  }

}
