import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EditAboutmeComponent } from './components/about-me/edit-aboutme.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';
/*import { AuthGuard } from './guards/auth.guard';*/

const routes: Routes = [
  {path: '', component: HomeComponent,
 /* canActivate: [AuthGuard]*/},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent} ,
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeduc', component: NewEducacionComponent},
  {path: 'editeduc/:id', component: EditEducacionComponent},
  {path: 'nuevaproy', component: NewProyectoComponent},
  {path: 'editproy/:id', component: EditProyectoComponent},
  {path: 'editaboutme/:id', component: EditAboutmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
