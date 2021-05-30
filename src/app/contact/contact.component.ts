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
  errMess: String;
  isWaiting =true;

  constructor(private router:Router, private cs :ContactService) { }

  ngOnInit(): void {
         this.cs.getContacts().subscribe(
         contacts => { this.contacts = contacts ; this.isWaiting=false; ;},
         errmess => {this.contacts = []; this.errMess = <any>errmess;});

  }

  onDelete(id:number){
    this.cs.deleteContactById(id).subscribe(res => {
      let index = this.contacts.findIndex(contact => contact.id == id);
      return this.contacts.splice(index,1);
    }); 
  }
  onAbout(){
    this.router.navigate(["/about"])
  }

  onAddContact(){
    this.router.navigate(['/contact/edits/-1']);
  }

  onAddContactReactiveForm(){
    this.router.navigate(['/contact/edit-reactive-form']);
  }
}
