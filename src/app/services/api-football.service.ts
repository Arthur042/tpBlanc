import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class ApiFootballService {

  apiUrl = environment.apiUrl + 'players';

  constructor(private http : HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  getById(id: number): Observable<Player> {
    return this.http.get<Player>(this.apiUrl + '/' + id);
  }

  deletePlayer(id: number): Observable<Player> {
    return this.http.delete<Player>(this.apiUrl + '/' + id);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }
}
