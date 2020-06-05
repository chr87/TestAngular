import { Component, OnInit } from '@angular/core';
import { ChangeService } from './change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  eslogan;
  data;
  constructor(private change:ChangeService){   
  }
  ngOnInit(){
    this.change.dispatchValues();
    this.change.getEslogan().subscribe(data=>{
    this.eslogan=data;
    })
  }
  show(data){    
    this.data=data;
  }
}
