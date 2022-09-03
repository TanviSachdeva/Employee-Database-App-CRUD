import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html'
})
export class EmployeeListComponent implements OnInit {
  _searchKey: string;
  allEmployees: Employee[];
  filteredList: Employee[];
  viewClicked = false;

  // Service injected in constructor
  constructor(private employeeService:EmployeeService, private router: Router) { }

  // Gets filter by value from the search box
  get searchKey(): string {
    return this._searchKey;
  }

  // Sets filter by value from the search box
  set searchKey(value: string) {
    this._searchKey = value;
    this.filteredList = this._searchKey ? this.performFilter(this._searchKey) : this.allEmployees;
  }

  // Method to filter the employees on basis of filter by value
  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allEmployees.filter((employee: Employee) => employee.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     employee.lastname.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Initializes all employees list from employee service
  ngOnInit() {
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
    this._searchKey = "";
  }
  viewEmployee(){
    this.viewClicked = true;
  }
  // Method to add an employee to the list
  addEmployee(){
    this.router.navigate(["registrationForm"]);
  }

  // Method to refresh the employee list after successful delete
  refreshList(){
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
  }
}
