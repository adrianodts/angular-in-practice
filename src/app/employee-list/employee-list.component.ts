import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Array<Employee>;

  constructor(public employeeService: EmployeeService) { 
    this.employees = this.employeeService.employees
  }

  ngOnInit(): void {
  }

  public getSalaryColor(employees: any): string {
    switch (true) {
      case employees.salary <= 1000:
        return 'salary-cheap';
      case employees.salary <= 10000:
        return 'salary-expensive';
      case employees.salary > 10000:
        return 'salary-extra-expensive';
      default:
        return '';
    }
  }
}
