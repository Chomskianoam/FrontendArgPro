import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { DataService } from 'src/app/services/data.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
 
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
experienceList: any;
expe: Experiencia[] = [];
 
  constructor(private datosData:DataService, private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
 
  isLogged = false;
 
 
  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.experienceList=data.experience;
    });
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
 
  }
 
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }
 
  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }

}





