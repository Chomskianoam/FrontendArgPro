import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
/*import { AuthGuard } from './guards/auth.guard';*/

const routes: Routes = [
  {path: '', component: HomeComponent,
 /* canActivate: [AuthGuard]*/},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
