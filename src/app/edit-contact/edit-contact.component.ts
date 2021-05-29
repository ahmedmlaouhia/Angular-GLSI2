import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private router: Router,private contactService : ContactService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    let contact : Contact ={
      id : 4 ,
      name : form.value['name'],
      email : form.value ['email'],
      website : form.value ['website'],
      projects : [form.value[ 'projects']],
      image :'./assets/images/bill_gates.jpg',
      featured : true
    }

    this.contactService.addContact(contact);
    this.router.navigate(['/contact'])

  }
  onContacts(){
    this.router.navigate(['/contact']);
  }
}