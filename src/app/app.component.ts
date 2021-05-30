import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'project';
  isAuth

  authSubscription : Subscription

  constructor(private as:AuthService){}

  ngOnInit(): void {
    this.authSubscription = this.as.authSubject.subscribe((isAuth:Boolean) =>{
      this.isAuth = isAuth
    })
    this.as.emitAuthSubject()
  }
  
}
