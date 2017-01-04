import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee-project-component',
  template:'<h1>This is project of {{idparent}} page</h1>'
})
export class EmployeeProjectComponent implements OnInit, OnDestroy  { 
public idparent:number;
 public subscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

ngOnInit() {
    this.subscription = this.activatedRoute.parent.params.subscribe(params => {
      this.idparent = params["id"]

    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 }
