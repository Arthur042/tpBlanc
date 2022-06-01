import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Player } from 'src/app/models/player';
import { ApiFootballService } from 'src/app/services/api-football.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() player: Player = new Player();

  constructor(private api : ApiFootballService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  delete(id : number): void {
    this.api.deletePlayer(id).subscribe(data => {
      this.toastr.success('Le joueur a été supprimé!');
      window.location.reload();
    });
  }

}
