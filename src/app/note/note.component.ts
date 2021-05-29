import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { note } from '../Shared/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes:note[]
  constructor(private ns:NoteService) { }

  ngOnInit(): void {
    this.ns.getNotes();
    this.notes=this.ns.notes;
  }

}
