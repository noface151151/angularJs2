import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'employee-detail-component',
  templateUrl: 'app/employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  public id: number;
  public subscription: Subscription;
  public employee: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params["id"]
      this.employeeService.GetDetail(this.id).subscribe((resp) => {
        this.employee = resp;
        console.log(this.employee)
      },error=>{
        console.log(error.statusText)
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

