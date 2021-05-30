import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutService } from './services/about.service';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './services/contact.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NoteComponent } from './note/note.component';
import { NoteService } from './services/note.service';
import { EditReactiveFormComponent } from './edit-reactive-form/edit-reactive-form.component';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { HttpClientModule } from '@angular/common/http';
import { BaseURL } from './Shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MessagesComponent,
    HomeComponent,
    SiginComponent,
    NotFoundComponent,
    ContactDetailComponent,
    EditContactComponent,
    NoteComponent,
    EditReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AboutService,
    ContactService,
    NoteService,
    AuthGuard,
    AuthService,
    {provide: 'BaseURL', useValue: BaseURL},
    ProcessHttpmsgService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
