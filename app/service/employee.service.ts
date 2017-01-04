import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl="http://586c926d6d271c1200d51f8f.mockapi.io/api/employees1";

    constructor(private _http:Http){}
    GetList():Observable<any[]> {
      return this._http.get(this.apiUrl).map((resp:Response)=>resp.json())
    }
}