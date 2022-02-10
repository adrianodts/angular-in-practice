import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee, EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: any;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal: any;
  
  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: any;

  showMessageSuccess = false;
  showMessageError = false;
  employee: any;
  employeeToEdit: any;
  employeeToDelete: any;

  employees: Array<Employee>;

  constructor(public employeeService: EmployeeService) { 
    this.employees = this.employeeService.employees

  }

  ngOnInit(): void {
  }

  public newEmployee() {
    this.employeeNewModal.show();
    this.disableAlerts();
  }

  public editEmployee(employee: Employee) {
    this.employeeToEdit = employee;
    this.disableAlerts();
    this.employeeEditModal.show();
  }

  public destroyEmployee(employee: Employee) {
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
    this.disableAlerts();
  }

  public onNewEmployee(employee: Employee) {
    this.showMessageSuccess = true;
    this.employee = employee;
    console.log(employee);
  }

  public onEditEmployee(employee: Employee) {
    this.showMessageSuccess = true;
    console.log(employee);
  }

  public onDestroyEmployee(employee: Employee) {
    this.showMessageError = true;
    console.log(employee);
  }

  public disableAlerts() {
    this.showMessageSuccess = false;
    this.showMessageError = false;
  }
}


