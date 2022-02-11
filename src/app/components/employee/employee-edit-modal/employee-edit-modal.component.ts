import { Component, ElementRef, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { Employee } from '../../../services/employee.service';
import { BaseModalDirective } from '../../../directives/base-modal.directive';
@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends BaseModalDirective implements OnInit {

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

  ngOnInit(): void {
    super.init();
  }

}
