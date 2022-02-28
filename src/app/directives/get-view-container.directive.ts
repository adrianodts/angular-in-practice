import { Directive, ViewContainerRef } from '@angular/core';
//import { TestDynamicComponentComponent } from '../components/test-dynamic-component/test-dynamic-component.component';

@Directive({
  selector: '[appGetViewContainer]'
})
export class GetViewContainerDirective {

  // injects ViewContainerRef to use in another part of app
  constructor(public viewContainerRef: ViewContainerRef) { }

  // another way to create dynamic component 
  createComponent(component: any) {
    this.viewContainerRef.createComponent(component)
  } 
}
