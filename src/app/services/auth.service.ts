import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth :boolean =false

  authSubject = new Subject<boolean>()
  constructor() { }
  emitAuthSubject(){
    this.authSubject.next(this.isAuth)
  }

  onSignIn(){
    this.isAuth=true
    this.emitAuthSubject()
  }

  onSignOut(){
    this.isAuth=false
    this.emitAuthSubject()
  }
}
