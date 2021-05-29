import { Injectable } from '@angular/core';
import { CONTACTS } from '../shared/contacts';
import { Contact } from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[]=CONTACTS

  constructor() { }
  getContacts(): Contact[] {
    return this.contacts
  }
  getContactById(id:number): Contact{
    return this.contacts.find(c => c.id==id)
  }
  deleteContactById(id:number) {
     this.contacts.splice(this.contacts.findIndex(c => c.id==id),1)
  }
  addContact(contact: Contact){
    contact.id=this.contacts[(this.contacts.length -1)].id + 1;
    this.contacts.push(contact)
  }
}