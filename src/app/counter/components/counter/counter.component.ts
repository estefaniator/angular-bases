import { Component } from "@angular/core";

//compoenente es igual a una clase
@Component({
  selector: 'app-counter',
  template:  `<p>{{counter}}</p>
  <button (click)="increaseBy(1)">+1</button>
  <button  (click)="increaseBy(-1)">-1</button>
  <button  (click)="reset()">reset</button> `,

})
export class CounterComponent{
  public counter:number = 10;


  increaseBy(value:number):void{

    this.counter=this.counter + value;

  }

  reset():void{
    this.counter=10;
  }
}
