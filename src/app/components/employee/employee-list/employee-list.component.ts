import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeDetailModalComponent } from '../employee-detail-modal/employee-detail-modal.component';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ModalService } from '../../modal-dynamic/modal.service';
import { HttpClient } from '@angular/common/http';


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

  //employees: Array<Employee>;
  employees: Employee[] = [];

  successMessage = {
    message: '',
    show: false
  };

  constructor(
    public employeeService: EmployeeService, 
    private httpClient: HttpClient) { 
      // private modalService: ModalService, 
    //this.employees = this.employeeService.employees;
  }
  
  // ngAfterViewInit(): void {
  //   setTimeout(() => console.log('ngAfterViewInit() : ', this.employeeNewModal.name),500)
  // }

  ngOnInit(): void {
    this.getEmployees();
  }

  public newEmployee() {
    this.disableAlerts();
    // const modalRef = this.modalService.create(EmployeeNewModalComponent);
    // // modalRef.instance.onHide
    // //     .subscribe((data))
    // modalRef.onHide.subscribe((event: any) => {
    //     console.log(event);
    // });
    // modalRef.show();
    this.employeeNewModal.show();
  }

  public editEmployee(employee: Employee) {
    this.disableAlerts();
    this.employeeToEdit = employee;
    this.employeeEditModal.onHide.subscribe((event: any) => {
      const eventData = event.data;
      if (eventData && eventData.hasOwnProperty('employee')) {
          const employee = eventData.employee;
          const message = `O empregado <strong>${employee.name}</strong> foi alterado com sucesso`;
          this.showSuccessMesage(message);
      }
  });
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
    this.getEmployees();
    this.showMessageSuccess = false;
    this.showMessageError = false;
  }

  public closed(event: Event): void {
      console.log(event);
  }

  public opened(event: Event): void {
      console.log(event);
  }

  showSuccessMesage(message: string) {
    this.getEmployees();
    this.successMessage.message = message;
    this.successMessage.show = true;
    setTimeout(() => {
          this.successMessage.show = false;
      }, 3000);
  }

  public getEmployees() {
    this.httpClient
      .get<Employee[]>("http://localhost:3000/employee")
      .subscribe(data => this.employees = data
    );
  }
}


