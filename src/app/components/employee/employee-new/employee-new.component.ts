import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @ViewChild(ModalComponent)
  modalComponent: any;

  constructor(private employeeService: EmployeeService) { 
  }

  public add(event: Event): void {
    console.log(event);
    const employeeNew = Object.assign({}, this.employee);
    this.employeeService.addEmployee(employeeNew);
    console.log(this.employeeService.employees);
  }

  ngOnInit(): void {
  }

  private hide() {
    this.modalComponent.hide();
  }

  public show() {
    this.modalComponent.show();
  }
}
