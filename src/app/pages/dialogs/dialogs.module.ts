import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogComponent } from './my-dialogs/user-dialog/user-dialog.component';
import { FoodDialogComponent } from './my-dialogs/food-dialog/food-dialog.component';



@NgModule({
  declarations: [
    DialogsComponent,
    UserDialogComponent,
    FoodDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogsComponent
  ]
})
export class DialogsModule { }
