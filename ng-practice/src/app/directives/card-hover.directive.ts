import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
HostBinding,
Input
} from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @Input('appCardHover') config = {
    querySelector: '.card-text'
  };
  @HostBinding('class.card-outline-primary') private isHovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {
    //  renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.isHovering = false;
  }
}
