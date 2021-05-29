import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../Shared/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts :Contact[]

  constructor(private router:Router, private cs :ContactService) { }

  ngOnInit(): void {
    this.contacts=this.cs.getContacts()
  }

  onDelete(id:number){
    this.cs.deleteContactById(id);
  }
  onAbout(){
    this.router.navigate(["/about"])
  }

  onAddContact(){
    this.router.navigate(['/contact/edits']);
  }
}
