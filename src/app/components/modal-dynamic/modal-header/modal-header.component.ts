import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'modal-header',
  template: `
    <div class="modal-header">
      <ng-content></ng-content>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
  `,
  styles: []
})
export class ModalHeaderComponent {

  // constructor(private element: ElementRef) { }

  // ngOnInit(): void {
  //   const nativeElement: HTMLElement = this.element.nativeElement;
  //   const firstChild = nativeElement.firstChild;
  //   (<any>firstChild).classList.add('modal-header')
  // }

}
