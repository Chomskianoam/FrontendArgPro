import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
experienceList: any;

  constructor(private datosData:DataService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.experienceList=data.experience;
    })
  }

}
