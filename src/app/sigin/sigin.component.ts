import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  isAuth:boolean
  constructor( private auths:AuthService) { }

  ngOnInit(): void {
    this.isAuth=this.auths.isAuth
  }

  onSignIn(){
    this.auths.onSignIn()
    this.isAuth=this.auths.isAuth
  }

  onSignOut(){
    this.auths.onSignOut()
    this.isAuth=this.auths.isAuth
  }
}
