import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth :boolean =false
  constructor() { }

  onSignIn(){
    this.isAuth=true
  }

  onSignOut(){
    this.isAuth=false
  }
}
