import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public emp_list = [];
  constructor(private _employeeservices: EmployeeservicesService) { }

  ngOnInit() {
    this._employeeservices.getEmployee()
        .subscribe(data => this.emp_list = data);
  }

}
