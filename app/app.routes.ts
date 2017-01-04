import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import {EmployeeProjectComponent} from './employee-project.component';
import { LoginComponent } from './login.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-detail/:id', component: EmployeeDetailComponent,children:[
        {path:'project',component:EmployeeProjectComponent}
    ] },
    {path:'login',component:LoginComponent},
    { path: '**', component: NotFoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing);
