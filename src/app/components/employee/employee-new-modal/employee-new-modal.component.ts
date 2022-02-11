import { Component, ElementRef, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { BaseModalDirective } from 'src/app/directives/base-modal.directive';
import { Employee, EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends BaseModalDirective implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) { 
    super();
  }

  public add(event: Event): void {
    console.log(event);
    const employeeNew = Object.assign({}, this.employee);
    this.employeeService.addEmployee(employeeNew);
    console.log(this.employeeService.employees);
    this.onSubmit.emit(employeeNew);
    this.employee = { name:'', salary:0, bonus:0 }
    this.hide();
  }

  ngOnInit(): void {
    super.init();
  }

}
