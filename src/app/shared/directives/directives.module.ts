import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './font-size.directive';
import { RepeatDirective } from './repeat.directive';



@NgModule({
  declarations: [
    FontSizeDirective,
    RepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FontSizeDirective,
    RepeatDirective
  ]
})
export class DirectivesModule { }
