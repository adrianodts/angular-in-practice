import { Component, ElementRef, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ModalComponent } from '../../modal/modal.component';
@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: any;

  @ViewChild(ModalComponent)
  modalComponent: any;

  // saida de dados
  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { 
  }

  public save(event: Event): void {
    this.onSubmit.emit(this.employee);
    this.hide();

  }

  private hide() {
    this.modalComponent.hide()
  }

  public show() {
    this.modalComponent.show()
  }

  ngOnInit(): void {
  }

}
