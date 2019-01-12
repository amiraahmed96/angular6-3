import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iemployee } from './employee';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  private _url = '/assets/data/employee.json';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Iemployee[]> {
    return this.http.get<Iemployee[]>(this._url);
  }

}
