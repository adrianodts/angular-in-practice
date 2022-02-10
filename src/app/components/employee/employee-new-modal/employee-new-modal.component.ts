import { Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';

declare const $: any;

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

  // saida de dados
  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService, private element: ElementRef) { 
    // setTimeout(() => {
    //   this.name = 'Adriano Silva';
    // }, 3000);
  }

  public add(event: Event): void {
    console.log(event);
    const employeeNew = Object.assign({}, this.employee);
    this.employeeService.addEmployee(employeeNew);
    console.log(this.employeeService.employees);
    this.onSubmit.emit(employeeNew);
    this.hide();

  }

  private hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  public show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal():HTMLElement {
    const nativeElement:HTMLElement = this.element.nativeElement
    return nativeElement.firstChild as HTMLElement;
  }

  ngOnInit(): void {
  }

}
