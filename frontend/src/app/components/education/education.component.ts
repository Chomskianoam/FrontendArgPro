import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:any;  

  constructor(private datosData:DataService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.educationList=data.education;
    })
  }

}
