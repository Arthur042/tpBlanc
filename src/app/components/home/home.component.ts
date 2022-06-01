import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { ApiFootballService } from 'src/app/services/api-football.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playersGuardian: Player[] = [];
  playerDedfenseurs: Player[] = [];
  playersMiddle: Player[] = [];
  playersAttack: Player[] = [];
  numberPlayer ?: number;

  constructor(private api : ApiFootballService) { }

  ngOnInit(): void {
    this.api.getPlayers().subscribe(data => {
      this.playersGuardian = data.filter(player => player.poste === 'Gardien de but');
      this.playerDedfenseurs = data.filter(player => player.poste === 'Défenseur');
      this.playersMiddle = data.filter(player => player.poste === 'Milieu de terrain');
      this.playersAttack = data.filter(player => player.poste === 'Attaquant');
      this.numberPlayer = data.length;
    })
  }

}