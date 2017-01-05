import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private islogin: boolean;


    IsLogged(): boolean {
        return this.islogin;
    }
    SetLogin(isloggedin:boolean) {
        this.islogin=isloggedin;
    }

}