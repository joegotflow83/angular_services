import {Component, OnInit} from 'angular2/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
    selector: 'my-app',
    providers: [EmployeeService]
    templateUrl: 'app/ts/employee.component.html'
})

export class AppComponent {
    employees = [
        new Employee(1, "Joe"),
        new Employee(2, "Mark"),
        new Employee(3, "Phil"),
    ];

    constructor(private _employeeService: EmployeeService) {}
    getEmployees() {
        this._employeeService.getEmployees().then(employees=>this.employees = employeees);
    }

    ngOnInit() {
        this.getEmployees();
    }
}
