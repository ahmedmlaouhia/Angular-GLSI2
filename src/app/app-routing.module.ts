import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoteComponent } from './note/note.component';
import { SiginComponent } from './sigin/sigin.component';

const routes: Routes = [
  {
    path:"about", 
    canActivate:[AuthGuard],
    component:AboutComponent
  },
  {
    path:"contact", 
    canActivate:[AuthGuard],
    component:ContactComponent
  },
  {
    path:"contact/edits", 
    canActivate:[AuthGuard],
    component:EditContactComponent
  },
  {
    path:"contacts/:id", 
    canActivate:[AuthGuard],
    component: ContactDetailComponent
  },
  {
    path:"notes",
    canActivate:[AuthGuard],
    component: NoteComponent
  },
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"home", 
    canActivate:[AuthGuard],
    component:HomeComponent
  },
  {
    path:"sigin",
    component:SiginComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
