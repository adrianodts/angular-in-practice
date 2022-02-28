import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/services/employee.service';
import { BaseModal } from '../../modal/base-modal.component';

@Component({
  selector: 'employee-detail-modal',
  templateUrl: './employee-detail-modal.component.html',
  styleUrls: ['./employee-detail-modal.component.css']
})
export class EmployeeDetailModalComponent  extends BaseModal implements OnInit {
  
  @Input()
  employee: any

  constructor() { 
    super();
  }

  override ngOnInit(): void {
    this.onShow.subscribe(() => {
    })
  }
}
