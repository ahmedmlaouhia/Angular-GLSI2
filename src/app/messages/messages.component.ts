import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../Shared/comment'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
@Input() comments:Comment[]

  constructor() { }

  ngOnInit(): void {
  }

}
