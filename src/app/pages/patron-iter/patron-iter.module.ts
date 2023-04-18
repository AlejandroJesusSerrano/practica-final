import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatronIterComponent } from './patron-iter.component';



@NgModule({
  declarations: [
    PatronIterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  PatronIterComponent
  ]
})
export class PatronIterModule { }
