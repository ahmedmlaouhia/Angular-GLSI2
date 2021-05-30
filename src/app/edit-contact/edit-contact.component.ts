import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = {
  id: null,
  name: "",
  email: "" ,
  website: "",
  projects: [],
  featured: false, 
  image: 'images/unknow-avatar.jpg'  };
 

  constructor(private route:ActivatedRoute, private router: Router,private contactService : ContactService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result => {
      let id = result.get('id');
      if (id != "-1") this.initContact(id);
    });
  }
  initContact(id) {
    this.contactService.getContactById(id).subscribe(contact => {
      this.contact = contact;
      console.log(this.contact);
    })

  }
  onSubmit(){
    if (this.contact.id == null) {
      this.contactService.addContact(this.contact).subscribe(
        contact => {this.router.navigate(['/contact'])}
      );
    }else {
      this.contactService.updateContact(this.contact).subscribe(
        contact => {
          this.router.navigate(['/contacts/'+this.contact.id])
        }
      );
    }

  }

  onContacts(){
    this.router.navigate(['/contact']);
  }
}