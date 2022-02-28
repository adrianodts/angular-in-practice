import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();
  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { 
    //super(element);
    // setTimeout(() => {
    //   console.log(this.element.nativeElement)
    // }, 1000)
    //console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    const el: HTMLElement = this.element.nativeElement;
    el.querySelector('[modal-title]')?.classList.add('modal-title');
    el.querySelector('[modal-body]')?.classList.add('modal-body');
    el.querySelector('[modal-footer]')?.classList.add('modal-footer');

    $(this.divModal).on('hidden.bs.modal', (e: any) => {
      console.log('closed', e);
    })

    $(this.divModal).on('shown.bs.modal', (e: any) => {
      console.log('shown', e);
    })
  }

  public hide() {
    $(this.divModal).modal('hide');
  }

  public show() {
    $(this.divModal).modal('show');
  }
    
  private get divModal():HTMLElement {
    //console.log(this.element.nativeElement)
    const nativeElement:HTMLElement = this.element.nativeElement
    return nativeElement.firstChild as HTMLElement;
  }
}
