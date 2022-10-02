import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from 'src/app/model/aboutme';
import { SAboutmeService } from 'src/app/services/s-aboutme.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {
  aboutMe : Aboutme = null;

  constructor(private sAboutme: SAboutmeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']; //"Captura" el id de la experiencia que queremos modificar
    this.sAboutme.detail(id).subscribe(
      data => {
        this.aboutMe = data;
      }, err => {
        alert("Error al modificar la sección");
        this.router.navigate(['']);
      }
    )
  }
 
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAboutme.update(id, this.aboutMe).subscribe(
      data => {
        this.router.navigate(['']);
     }, err => {
      alert("Error al modificar la sección");
      this.router.navigate(['']);
     }
    )
  }

}
