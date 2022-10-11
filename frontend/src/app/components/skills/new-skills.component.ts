import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/services/s-skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombreS: string;
  porcentaje: number;

  constructor(private sSkills: SSkillsService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skills(this.nombreS, this.porcentaje);
    this.sSkills.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("La creación de una nueva skill falló");
      this.router.navigate(['']);
    })
  }

}
