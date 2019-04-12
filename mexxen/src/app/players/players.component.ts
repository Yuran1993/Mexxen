import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Player } from './Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit {
  inputlist: string[] = [];
  players: object[] = [];

  inputValue(){
    let input = document.getElementsByTagName("input");
    for(let i = 0; i<input.length; i++){
      if(input[i].value){
        let naam = input[i].value.charAt(0).toUpperCase() + input[i].value.substr(1);
        this.inputlist.push(naam);
      }
    }
    this.genereerPlayers();
  }

  genereerPlayers(){
    for(let i = 0; i<this.inputlist.length; i++){
      let player = new Player(this.inputlist[i]);
      this.players.push(player);
    }
    console.log(this.players);
  }

  constructor(private data: PlayerService) { }

  ngOnInit() {
    this.data.currentPlayers.subscribe(players => this.players = players);
  }
}
