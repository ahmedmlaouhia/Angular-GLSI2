import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../Shared/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent implements OnInit {
  id:any
  contact:Contact;
  constructor(private cs:ContactService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.id=res.get('id');
    })
    this.contact=this.cs.getContactById(this.id);
    console.log(this.contact)
  }

  onContacts(){
    this.router.navigate(['/contact']);
  }
}