import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardsModule } from '../pages/cards/cards.module';
import { ButtonsAndIconsModule } from '../pages/buttons-and-icons/buttons-and-icons.module';
import { FormularModule } from '../pages/formular/formular.module';
import { DialogsModule } from '../pages/dialogs/dialogs.module';
import { TablesModule } from '../pages/tables/tables.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CardsModule,
    ButtonsAndIconsModule,
    FormularModule,
    DialogsModule, 
    TablesModule,
    

  ],
  exports: [
    MatDrawer,
    DashboardComponent
  ]
})
export class DashboardModule { }
