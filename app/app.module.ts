import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { LoginComponent } from './login.component';
import { EmployeeService } from './service/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { LoginService } from './service/login.service';
import {CheckLoginGuard} from './guards/check-login.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeProjectComponent,
    LoginComponent
  ],
  providers: [EmployeeService,LoginService,CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
