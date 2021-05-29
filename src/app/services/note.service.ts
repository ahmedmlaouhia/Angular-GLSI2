import { Injectable } from '@angular/core';
import { note } from '../Shared/note';
import { NOTES } from '../Shared/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes:note[]
  constructor() { }

  getNotes(){
    this.notes=NOTES;
  }
}
