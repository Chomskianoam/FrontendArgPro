import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/model/aboutme';
import { PersonaModel } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { SAboutmeService } from 'src/app/services/s-aboutme.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  PersonaModel: PersonaModel = new PersonaModel("", "", "");
  about: Aboutme[] = [];

  constructor( public personaService:PersonaService, private sAboutme: SAboutmeService, private tokenService: TokenService) { }

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
    this.sAboutme.lista().subscribe(data => {this.about = data;})
  }
 
  delete(id?: number){
    if(id != undefined){
      this.sAboutme.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      );
    }
  }

}
