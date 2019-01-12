import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public emp_list = [];

  public errMsg = '';
  constructor(private _employeeservices: EmployeeservicesService) { }

  ngOnInit() {
    this._employeeservices.getEmployee()
        .subscribe(data => this.emp_list = data);
  }

}
