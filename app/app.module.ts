import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {EmployeeListComponent} from './employee.component';
import { EmployeeService } from './service/employee.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,EmployeeListComponent ],
  providers:[EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
