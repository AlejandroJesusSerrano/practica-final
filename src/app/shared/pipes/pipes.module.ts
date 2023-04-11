import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteNamePipe } from './complete-name.pipe';
import { ControlErrorMessagePipe } from './control-error-message.pipe';




@NgModule({
  declarations: [
    CompleteNamePipe,
    ControlErrorMessagePipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompleteNamePipe,
    ControlErrorMessagePipe,
    
  ]
})
export class PipesModule { }
