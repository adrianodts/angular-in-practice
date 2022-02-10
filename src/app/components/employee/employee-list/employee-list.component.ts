import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee, EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  
  // @ViewChild(EmployeeNewModalComponent)
  // employeeNewModal: any;
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
    this.employees = this.employeeService.employees;


  }
  
  // ngAfterViewInit(): void {
  //   setTimeout(() => console.log('ngAfterViewInit() : ', this.employeeNewModal.name),500)
  // }

  ngOnInit(): void {
  }

  public newEmployee() {
    this.disableAlerts();
    this.employeeNewModal.show();
  }

  public editEmployee(employee: Employee) {
    this.disableAlerts();
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  public destroyEmployee(employee: Employee) {
    this.disableAlerts();
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
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


