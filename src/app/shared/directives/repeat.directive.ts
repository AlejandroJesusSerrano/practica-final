import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  @Input()
  set appRepeat(value: number) {
    for(let i = 0; i < value; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    };
  }

  constructor(private templateRef: TemplateRef<unknown>, private viewContainerRef: ViewContainerRef) { }

}
