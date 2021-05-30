import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-edit-reactive-form',
  templateUrl: './edit-reactive-form.component.html',
  styleUrls: ['./edit-reactive-form.component.css']
})
export class EditReactiveFormComponent implements OnInit {

  contactForm: FormGroup

  constructor(private formBuilder:FormBuilder, private router:Router, private contactService : ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
      this.contactForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      website:['',[Validators.required,Validators.pattern('https?://.+')]],
      projects:['',Validators.required],
    })
  }

  onSubmit(){
    let contact : Contact={
      id : -1,
      name : this.contactForm.get('name').value,
      email : this.contactForm.get('email').value,
      website : this.contactForm.get('website').value,
      projects : [this.contactForm.get('projects').value],
      featured : false,
      image :'./assets/images/bill_gates.jpg',
    };
    this.contactService.addContact(contact)
    this.router.navigate(['/contact'])
  }
  
  onContacts(){
    this.router.navigate(["/contact"])
  }
  
}
