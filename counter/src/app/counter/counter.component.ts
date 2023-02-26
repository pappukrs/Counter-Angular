import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
count=0;
Increment(){
  this.count+=1;
}
Decrement(){
  if(this.count>0){
    this.count-=1;
  }
}
Reset(){
  this.count=0;
}
}
