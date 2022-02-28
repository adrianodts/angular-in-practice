import { Directive, ElementRef } from '@angular/core';

@Directive({
  // selector: '[appInput]'
  selector: 'input'

})
export class InputDirective {

  constructor(private el: ElementRef) { }

  focus() {
    console.log('try to focus')
    this.el.nativeElement.focus();
  }

}
