import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { ApiFootballService } from 'src/app/services/api-football.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  player: Player = new Player();

  constructor(private route: ActivatedRoute, private api: ApiFootballService) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.api.getById(id).subscribe(data => {
      this.player = data;
    })
  }

}
