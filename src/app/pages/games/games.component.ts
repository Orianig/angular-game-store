import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  title = 'angular-game';
  gameList: any[] = [];
  cardType = 'large';
  searchTerm: string = '';

  // inyecto el servicio en el componente
  constructor(private GamesService: GamesService) {
    this.getGameList();
  }

  getGameList() {
    // me subscribo al metodo que me devuelve los juegos
    this.GamesService.getAllGames().subscribe((results) => {
      console.log(results);
      // asigno los juegos a la variable gameList
      this.gameList = results;
    });
  }

  onSearch() {
    this.GamesService.searchGames(this.searchTerm).subscribe((results) => {
      console.log(results);
      this.gameList = results;
    });
  }
}
