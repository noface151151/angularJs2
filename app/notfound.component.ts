import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'notfound-component',
  template:'<h1>Not found</h1><button (click)="GotoHome()">Go to Home</button>'
  
})
export class NotFoundComponent  { 
constructor(private router:Router){}
GotoHome(){
    this.router.navigate(['']);
}
 }
