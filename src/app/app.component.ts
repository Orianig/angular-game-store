import { Component } from '@angular/core';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-game';
  gameList: any[] = [];

  // inyecto el servicio en el componente
  constructor(private gameService: GamesService) {
    this.getGameList();
  }

  getGameList() {
    // me subscribo al metodo que me devuelve los juegos
    this.gameService.getAllGames().subscribe((results) => {
      console.log(results);
      // asigno los juegos a la variable gameList
      this.gameList = results;
    });
  }
}
