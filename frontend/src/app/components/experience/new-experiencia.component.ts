import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
 
@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  imgE: string = '';
 
  constructor(private sExperiencia: SExperienciaService, private router:Router) { }
 
  ngOnInit(): void {
  }
 
  onCreate():void{
    console.log("A ver hasta dónde llega");
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.imgE);
    console.log("A ver hasta dónde llega");
    this.sExperiencia.save(expe).subscribe(data => {
      console.log("A ver hasta dónde llega")
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("La creación de una nueva experiencia falló");
      this.router.navigate(['']);
    })
  }
 
}
