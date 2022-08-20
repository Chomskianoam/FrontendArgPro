import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/model/persona.model';
import { DataService } from 'src/app/services/data.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  PersonaModel: PersonaModel = new PersonaModel("", "", "");
  aboutme: any;

  constructor(private datosData:DataService, public personaService:PersonaService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.aboutme=data;
    }),
    this.personaService.getPersona().subscribe(data => {this.PersonaModel = data});
  }

}
