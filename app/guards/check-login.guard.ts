import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from '../service/login.service';

@Injectable()
export class CheckLoginGuard implements CanActivate{

    constructor(private loginservice:LoginService) {

    }

    canActivate(){
        let status= this.loginservice.IsLogged();
        if(status==false)
        {
            alert("No permision");
           
        }
        return status;
    }

}
