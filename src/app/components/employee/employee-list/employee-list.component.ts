import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeDetailModalComponent } from '../employee-detail-modal/employee-detail-modal.component';
import { Employee, EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  
  // @ViewChild(EmployeeNewModalComponent)
  // employeeNewModal: any;

  // obtém a referencia de um elemento
  @ViewChild(EmployeeNewModalComponent) 
  employeeNewModal: any;

  // obtém a referencia de um elemento de outra forma
  @ViewChild('employeeEditModal')
  employeeEditModal: any;
  
  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: any;

  @ViewChild(EmployeeDetailModalComponent)
  employeeDetailModal: any

  showMessageSuccess = false;
  showMessageError = false;
  employee: any;
  employeeToEdit: any;
  employeeToDelete: any;
  employeeToDetail: any

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
  
  public openDetailModal(employee: Employee) {
    this.disableAlerts();
    this.employeeToDetail = employee;
    this.employeeDetailModal.show();
  }

  public destroyEmployee(employee: Employee) {
    this.disableAlerts();
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  public onNewEmployee(employee: Employee) {
    this.showMessageSuccess = true;
    this.employee = employee;
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

  public closed(event: Event): void {
      console.log(event);
  }

  public opened(event: Event): void {
      console.log(event);
  }
}


