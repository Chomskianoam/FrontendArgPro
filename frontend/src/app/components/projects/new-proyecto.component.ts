import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP : string = '';
  lenguajeP : string = '';
  descripcionP : string = '';
  imgP : string = ''; 

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proy = new Proyecto(this.nombreP, this.lenguajeP, this.descripcionP, this.imgP);
    this.sProyecto.save(proy).subscribe(data => {
      alert("Tarjeta de educación añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("La creación de una nueva tarjeta falló");
      this.router.navigate(['']);
    })
  }

}
