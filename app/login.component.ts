import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './service/login.service';
@Component({
    selector: 'login-component',
    templateUrl: 'app/login.component.html'
})
export class LoginComponent {
    public user: any = { username: "namdo", password: "123456" }
    public failed: boolean = false;
    constructor(private router: Router,private loginservice:LoginService) {

    }

    onSubmit(value: any) {
        if (value.username == this.user.username && value.password == this.user.password) {
           this.loginservice.SetLogin(true);
            this.router.navigate(['/'])
        }
        else {
            this.loginservice.SetLogin(false);
            this.failed = true;
            
        }
    }
}
