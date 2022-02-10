import { Component, ElementRef, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @ViewChild(ModalComponent)
  modalComponent: any;

  // saida de dados
  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) { 
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

  private hide() {
    this.modalComponent.hide();
  }

  public show() {
    this.modalComponent.show()
  }

  ngOnInit(): void {
  }

}
