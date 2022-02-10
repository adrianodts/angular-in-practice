import { Component, ElementRef, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'modal',
  template: `
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <ng-content select="[modal-title]"></ng-content>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <ng-content select="[modal-body]"></ng-content>
                <ng-content select="[modal-footer]"></ng-content>
            </div>
        </div>
    </div>
  `,
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  private hide() {
    $(this.divModal).modal('hide');
  }

  public show() {
    $(this.divModal).modal('show');
  }

  private get divModal():HTMLElement {
    console.log(this.element.nativeElement)
    const nativeElement:HTMLElement = this.element.nativeElement
    return nativeElement.firstChild as HTMLElement;
  }

}
