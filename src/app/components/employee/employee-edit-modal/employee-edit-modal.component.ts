import { Component, ElementRef, Output, EventEmitter, Input, ViewChild, ViewChildren, AfterViewInit, OnInit} from '@angular/core';
import { InputDirective } from 'src/app/directives/input.directive';
import { Employee } from '../../../services/employee.service';
import { BaseModal } from "../../modal/base-modal.component";
@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends BaseModal implements AfterViewInit {

  // @ViewChild(InputDirective)
  // input: any

  @ViewChildren(InputDirective) 
  inputs: any;

  @Input()
  employee: any;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { 
    super()
  }
  
  public save(event: Event): void {
    this.onSubmit.emit(this.employee);
    this.hide();

  }

  // override ngOnInit(): void {
  //   //super.init();
  //   this.onShow.subscribe(() => {
  //     console.log(this.inputName)
  //     console.log('try to focus')
  //     this.inputName.focus();
  //   })
  // }
  
  ngAfterViewInit(): void {
    console.log(this.inputs);
  }

}
