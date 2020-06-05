import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.sass']
})
export class DataChildComponent implements OnInit {
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onSave(form:NgForm){
   const data={
     nom:form.value.nom,
     prenom:form.value.prenom,
     status:form.value.status,
     sexe:form.value.sexe
  }
   form.reset();
   this.data.emit(data);
  }
}
