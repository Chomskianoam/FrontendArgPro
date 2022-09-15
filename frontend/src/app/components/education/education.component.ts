import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { DataService } from 'src/app/services/data.service';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:any;  
  educ : Educacion[] = [];


  constructor(private datosData:DataService, private sEducacion: SEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.educationList=data.education;
    });
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sEducacion.lista().subscribe(data => {this.educ = data;})
  }
 
  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }


}
