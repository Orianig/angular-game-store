import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  //url y token (api key)
  private baseUrl = 'https://api.rawg.io/api';
  private token: String = '58b51566c19944c1ac8a65cdd3b75d2a';

  // Inyecto el HttpClient con sus metodos
  constructor(private httpClient: HttpClient) {}

  //peticiones API
  getAllGames(page = 12) {
    return (
      this.httpClient
        .get<any>(`${this.baseUrl}/games?key=${this.token}&page_size=${page}`)
        // uso el pipe para devolver solo los resultados
        // RXJS tiene muchos operadores
        .pipe(tap((data) => console.log(data)))
        .pipe(map((data) => data.results))
    );
  }

  searchGames(searchTerm: string) {
    return this.httpClient
      .get<any>(`${this.baseUrl}/games?key=${this.token}&search=${searchTerm}`)
      .pipe(tap((data) => console.log(data)))
      .pipe(map((data) => data.results));
  }

  createGame(game: any) {
    return this.httpClient.post(
      `${this.baseUrl}/games?key=${this.token}`,
      game
    );
  }

  updateGame(game: any) {
    return this.httpClient.put(`${this.baseUrl}/games?key=${this.token}`, game);
  }
}
