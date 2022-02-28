import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'modal-body',
  template: '<ng-content></ng-content>',
  styles: []
})
export class ModalBodyComponent {

  // constructor(private element: ElementRef) { }

  // ngOnInit(): void {
  //   const nativeElement: HTMLElement = this.element.nativeElement;
  //   const firstChild = nativeElement.firstChild;
  //   (<any>firstChild).classList.add('modal-body')
  // }

}
