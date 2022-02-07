import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  constructor(private employeeService: EmployeeService) { 
    // setTimeout(() => {
    //   this.name = 'Adriano Silva';
    // }, 3000);
  }

  public add(event: Event): void {
    console.log(event);
    const employeeNew = Object.assign({}, this.employee);
    this.employeeService.addEmployee(employeeNew);
    console.log(this.employeeService.employees);
  }

  ngOnInit(): void {
  }

}