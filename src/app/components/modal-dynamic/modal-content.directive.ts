import { Directive, ViewContainerRef } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic.component';

@Directive({
  selector: '[modalContent]'
})
export class ModalContentDirective {


  constructor(public viewContainerRef: ViewContainerRef) { }
  // constructor(public viewContainerRef: ViewContainerRef) { }

  // createComponent(component: any) {
  //   this.viewContainerRef.createComponent(component)
  // } 

}
