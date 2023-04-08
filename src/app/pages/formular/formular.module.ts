import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularComponent } from './formular.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    FormularComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    
  ],
  exports: [
    FormularComponent
  ]
})
export class FormularModule { }
