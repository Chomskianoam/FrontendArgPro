import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-log-in',
  templateUrl: './btn-log-in.component.html',
  styleUrls: ['./btn-log-in.component.css']
})
export class BtnLogInComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.Router.navigate(['/login']);
  }


}
