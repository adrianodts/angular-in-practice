import { Component, OnInit } from '@angular/core';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';

@Component({
  selector: 'app-test-modal-dynamic',
  templateUrl: './test-modal-dynamic.component.html',
  styles: []
})
export class TestModalDynamicComponent implements OnInit {


  constructor(private modalRef: ModalRefService) { }

  ngOnInit() {
    console.log(this.modalRef);
    setTimeout(() => {
        this.modalRef.hide();
    },3000);

  }

}