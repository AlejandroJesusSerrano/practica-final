import { Directive, ElementRef, Renderer2, Input, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnChanges {

  @Input() size: number = 20

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    this.setSize();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSize()
  }

  setSize(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', `${this.size}px`);
  }
}
