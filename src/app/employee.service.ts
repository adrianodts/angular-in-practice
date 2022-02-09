import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    { name: 'Fulano de Tal', salary: 999, bonus: 1 },
    { name: 'Beltrano', salary: 9999, bonus: 0 },
    { name: 'Cicrano', salary: 99999, bonus: 0 },
  ];

  constructor() { }

  public addEmployee(employee: Employee): void {
    const bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    this.employees.push({ name: employee.name, salary: employee.salary, bonus });
  }

  public destroyEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index === -1) {
      this.employees.splice(index, 1)
    }
  }
}
