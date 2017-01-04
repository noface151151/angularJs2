import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employeelist: [any] = [
            { Id: 1, Name: "Do Ngoc Nam" },
            { Id: 2, Name: "Tran Van Binh" },
            { Id: 3, Name: "Tu Ma Y" },
        ];
        return employeelist
    }
}