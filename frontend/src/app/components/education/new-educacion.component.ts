import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd : string = '';
  tituloEd : string = '';
  yearEd : string = '';
  imgEd : string = ''; 

  constructor(private sEducation: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Educacion(this.nombreEd, this.tituloEd, this.yearEd, this.imgEd);
    this.sEducation.save(expe).subscribe(data => {
      alert("Tarjeta de educación añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("La creación de una nueva tarjeta falló");
      this.router.navigate(['']);
    })
  }


}
