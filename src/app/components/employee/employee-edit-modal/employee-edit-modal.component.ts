import { Component, ElementRef, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import { Employee } from '../../../services/employee.service';
import { BaseModal } from "../../modal/base-modal.component";
@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends BaseModal {

  @ViewChild('inputName')
  inputName: any

  @Input()
  employee: any;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { 
    super()
  }

  public save(event: Event): void {
    this.onSubmit.emit(this.employee);
    this.hide();

  }

  ngOnInit(): void {
    //super.init();
    this.onShow.subscribe(() => {
      this.inputName.nativeElement.focus();
    })
  }

}
