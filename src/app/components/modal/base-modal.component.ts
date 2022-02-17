import { Output, ViewChild, EventEmitter, Component } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Component({
    template: ''
})
export class BaseModal {

    @ViewChild(ModalComponent)
    modalComponent: any;

    @Output()
    onHide: EventEmitter<any> = new EventEmitter();

    @Output()
    onShow: EventEmitter<any> = new EventEmitter();

    public init(): void {
        // this.modalComponent.onHide.subscribe((event: any) => {
        //     console.log(event);
        //     this.onHide.emit(event);
        // });
        this.modalComponent.onShow.subscribe((event: any) => {
            console.log(event);
            this.onShow.emit(event);
        });
    }

    public hide() {
        this.modalComponent.hide();
    }

    public show() {
        this.modalComponent.show();
    }

    public closed(event: Event): void {
        console.log(event);
        this.onHide.emit(event);
    }

    public opened(event: Event): void {
        console.log(event);
    }
}
