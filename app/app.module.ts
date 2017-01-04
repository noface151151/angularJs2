import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HomeComponent} from './home.component';
import {EmployeeListComponent} from './employee.component';
import {NotFoundComponent} from './notfound.component';
import { EmployeeService } from './service/employee.service';
import {HttpModule} from '@angular/http';
import {appRoutes} from './app.routes';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,appRoutes ],
  declarations: [ AppComponent,EmployeeListComponent,HomeComponent,NotFoundComponent ],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
