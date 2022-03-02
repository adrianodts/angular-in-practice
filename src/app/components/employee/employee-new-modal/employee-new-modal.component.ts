import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Output, EventEmitter, ViewChild, OnInit} from '@angular/core';
import { InputDirective } from 'src/app/directives/input.directive';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { BaseModal } from '../../modal/base-modal.component';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends BaseModal implements OnInit {

  // @ViewChild(InputDirective)
  // inputName: any
  
  @ViewChild('inputSalary', { read: InputDirective })
  inputName: any // ElementRef

  employee: Employee = this.newEmployee();

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  
  // constructor(private employeeService: EmployeeService, private httpCliente: HttpClient) { 
  constructor(private httpClient: HttpClient) {
    super();
  }

  public add(event: Event): void {
    console.log(event);
    const employeeNew = Object.assign({}, this.employee);
    // this.employeeService.addEmployee(employeeNew);
    // console.log(this.employeeService.employees);
    this.httpClient
      .post<Employee>("http://localhost:3000/employee", this.employee)
      .subscribe(data => {
        this.onSubmit.emit(employeeNew);
        this.employee = data;
        this.hide();
      });
  }

  private newEmployee(): Employee {
    return {
      name: '',
      salary: 0,
      bonus: 0
    }
  }

  
  override ngOnInit(): void {
    // super.init();
    this.onShow.subscribe(() => {
      console.log(this.inputName)
      this.inputName.focus();
    })
  }

}
