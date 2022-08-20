import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-btn-log-in',
  templateUrl: './btn-log-in.component.html',
  styleUrls: ['./btn-log-in.component.css']
})
export class BtnLogInComponent implements OnInit {
  isLogged = false;
  constructor(private Router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  login(){
    this.Router.navigate(['/login']);
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }


}
