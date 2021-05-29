import { Injectable } from '@angular/core';
import { Comment } from '../Shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info={
    name:"Ahmed",
    email:"ahmedmlaouhia6@gmail.com",
    tel:"123456789"
  };
  comments: Comment[]=[];
  constructor() { }

  getInfos(){
    return this.info;
  }

  addComment(c:Comment){
    c.date=new Date();
    this.comments.push(c)
  }

  getAllComments(): Comment[]{
    return this.comments
  }
}