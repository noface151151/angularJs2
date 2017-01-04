import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'login-component',
    templateUrl: 'app/login.component.html'
})
export class LoginComponent {
    public user: any = { username: "namdo", password: "123456" }
    public failed: boolean = false;
    constructor(private router: Router) {

    }

    onSubmit(value: any) {
        if (value.username == this.user.username && value.password == this.user.password) {
           
            this.router.navigate(['/'])
        }
        else {
            console.log("1")
            this.failed = true;
            
        }
    }
}
