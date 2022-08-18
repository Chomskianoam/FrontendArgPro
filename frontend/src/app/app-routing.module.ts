import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
/*import { AuthGuard } from './guards/auth.guard';*/

const routes: Routes = [
  {path: '', component: ContainerComponent,
 /* canActivate: [AuthGuard]*/},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
