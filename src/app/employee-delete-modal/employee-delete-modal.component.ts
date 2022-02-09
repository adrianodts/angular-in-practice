import { Component, ElementRef, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

declare const $: any;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: any;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) { 
  }

  public destroy(event: Event): void {
    console.log(event);
    const employeeDelete = Object.assign({}, this.employee);
    this.employeeService.destroyEmployee(employeeDelete);
    console.log(this.employeeService.employees);
    this.onDestroy.emit(employeeDelete);
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
