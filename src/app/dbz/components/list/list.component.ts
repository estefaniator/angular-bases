import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {  EventEmitter } from '@angular/core';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {




  @Input()
  public characterList:Character[]=[{
    name: 'Trunks',
    power:10,
  }]



  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string): void {

    if(!id)return;

    //console.log({id});

    this.onDelete.emit(id);

    console.log(id);
  };




}

