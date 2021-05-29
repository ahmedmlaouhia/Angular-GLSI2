import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about.service'
import {Comment} from '../Shared/comment'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  colors={odd:"red",even:"green"}
  comment:Comment={id:0 ,date :null, message:''}
  newComment=false;
  info:any
  comments :Comment[]
  constructor(private aboutService :AboutService) {}
  ngOnInit(): void {
    this.info=this.aboutService.getInfos();
    this.comments = this.aboutService.getAllComments()
  }

  addComment(){
    if(this.comment.message !=''){
      this.aboutService.addComment({
        id:this.comment.id,
        date:this.comment.date,
        message: this.comment.message
      });
      this.comment.message="" ;
    }
  }

}
