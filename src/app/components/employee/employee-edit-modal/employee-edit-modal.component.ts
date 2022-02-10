import { Component, ElementRef, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';


declare const $: any;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: any;

  // saida de dados
  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef) { 
  }

  public save(event: Event): void {
    this.onSubmit.emit(this.employee);
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
