import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {EmployeeListComponent} from './employee.component';
import { EmployeeService } from './service/employee.service';
import {HttpModule} from '@angular/http'

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,EmployeeListComponent ],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
