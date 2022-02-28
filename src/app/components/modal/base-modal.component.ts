import { Output, ViewChild, EventEmitter, Component, OnInit } from "@angular/core";
import { InputDirective } from "src/app/directives/input.directive";
import { ModalComponent } from "./modal.component";

@Component({
    template: ''
})
export class BaseModal implements OnInit {
    
    @ViewChild(InputDirective)
    inputSalary: any

    @ViewChild(ModalComponent)
    modalComponent: any;

    @Output()
    onHide: EventEmitter<any> = new EventEmitter();

    @Output()
    onShow: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        // this.modalComponent.onHide.subscribe((event: any) => {
        //     console.log(event);
        //     this.onHide.emit(event);
        // });
        // this.modalComponent.onShow.subscribe((event: any) => {
        //     console.log(event);
        //     this.onShow.emit(event);
        //     this.inputSalary.focus();
        // });
    }

    // public init(): void {
    // }

    public hide() {
        this.modalComponent.hide();
    }

    public show() {
        this.modalComponent.show();
    }

    // public closed(event: Event): void {
    //     console.log(event);
    //     this.onHide.emit(event);
    // }

    // public opened(event: Event): void {
    //     console.log(event);
    // }
}
