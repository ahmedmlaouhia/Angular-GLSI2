import { Inject, Injectable } from '@angular/core';
import { Contact } from '../shared/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


constructor(private httpClient: HttpClient, @Inject('BaseURL') private baseURL,
            private processHTTPMsgService : ProcessHttpmsgService) { }
getContacts(): Observable<Contact[]> {
  return this.httpClient.get<Contact[]>(this.baseURL + "contacts/").

  pipe(catchError(this.processHTTPMsgService.handleError));

}
getContactById(id:number): Observable <Contact>{
  return this.httpClient.get<Contact>(this.baseURL + "contacts/" + id)


}
deleteContactById(id:number): Observable<any> {
  return this.httpClient.delete <any> (this.baseURL + "contacts/" + id)


}
addContact(contact: Contact) : Observable <Contact> {

  return this.httpClient.post<Contact>(this.baseURL + "contacts/",contact,this.httpOptions);

}
updateContact(contact: Contact) : Observable <Contact> {
  return this.httpClient.put<Contact> (this.baseURL+"contacts/"+contact.id,contact,this.httpOptions);
}
}