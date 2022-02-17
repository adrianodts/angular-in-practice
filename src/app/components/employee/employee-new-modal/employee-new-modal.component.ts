import { Component, ElementRef, Output, EventEmitter, ViewChild, OnInit} from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { BaseModal } from '../../modal/base-modal.component';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends BaseModal implements OnInit {

  @ViewChild('inputName')
  inputName: any
  
  employee: Employee = this.newEmployee();

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
    this.employee = this.newEmployee();
    this.hide();
  }

  private newEmployee(): Employee {
    return {
      name: '',
      salary: 0,
      bonus: 0
    }
  }

  
  ngOnInit(): void {
    super.init();
    this.onShow.subscribe(() => {
      var el: ElementRef = this.inputName.nativeElement;
      el.nativeElement.focus();
    })
  }

}
