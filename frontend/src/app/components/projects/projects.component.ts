import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { DataService } from 'src/app/services/data.service';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proy : Proyecto[] = [];

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sProyecto.lista().subscribe(data => {this.proy = data;})
  }
 
  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }

 

}
