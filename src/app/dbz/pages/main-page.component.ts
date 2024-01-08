import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServise } from '../services/dbz.servise';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService: DbzServise) {}

    get characters(): Character[] {

      return [...this.dbzService.characters];

    }


    onDeleteCharacter(id:string): void {

      this.dbzService.deleteCharacterById(id);
    }


    onNewCharacter(character:Character): void {
        this.dbzService.addCharacter(character);
    }
}
