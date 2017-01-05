import { Component, OnChanges, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit, OnChanges {
  public islogged: boolean;

  constructor(private loginservice: LoginService) { }
  ngOnChanges(change: any) {
    this.islogged = change['islogged'];

  } ngOnInit() {
    this.islogged = this.loginservice.IsLogged();
  }
  Logout() {
    this.loginservice.SetLogin(false);
    this.islogged = this.loginservice.IsLogged();
    alert("Logged");
  }
}
