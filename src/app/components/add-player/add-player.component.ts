import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Player } from 'src/app/models/player';
import { ApiFootballService } from 'src/app/services/api-football.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerToAdd: Player = new Player();

  constructor(private api : ApiFootballService,private toastr : ToastrService, private route : Router) { }

  ngOnInit(): void {
  }

  addPlayer(): void {
    this.api.addPlayer(this.playerToAdd).subscribe(data => {
      this.toastr.success('Le joueur a été ajouté !');
      this.route.navigate(['/']);
    })

  }
}
