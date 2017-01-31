import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '.appClicked.'
})
export class ClickedDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseover() {
    this.backgroundColor = 'red';
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor = 'red';

  constructor() { }

}
