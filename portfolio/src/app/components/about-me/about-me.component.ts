import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutme: any;

  constructor(private datosData:DataService) { }

  ngOnInit(): void {
    this.datosData.obtenerDatos().subscribe(data => {
      this.aboutme=data;
    })
  }

}
