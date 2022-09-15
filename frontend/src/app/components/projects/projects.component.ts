import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { DataService } from 'src/app/services/data.service';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList:any;
  nombreP: string = '';
  lenguajeP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(private datosData:DataService, private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.projectsList=data.projects;
    })
  }

  onCreate():void{
    const pro = new Proyecto(this.nombreP, this.lenguajeP, this.descripcionP, this.imgP);
    this.sProyecto.save(pro).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("La creación de una nueva experiencia falló");
      this.router.navigate(['']);
    })
  }

}
