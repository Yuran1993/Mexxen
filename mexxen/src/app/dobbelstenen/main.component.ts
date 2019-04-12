import { Component, NgModule, OnInit } from '@angular/core';

import { GenereerDobbelstenen } from './dobbelstenen';
import { Scoreboard } from './scoreboard';
import { PlayersComponent } from '../players/players.component'
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-dobbelsteen',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  getal1: number;
  getal2: number;

  beurten: number = 3;
  beurtenTemp: number = 0;

  firstPlayer: boolean;
  stop: boolean = false;
  clicked: boolean
  mexx: boolean;

  players: any[];

  scoreboard = new Scoreboard();

  hoeveelheidBeurten() {
    this.dobbel();
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].score === 0 ? this.firstPlayer = true : this.firstPlayer = false;
    }
    if (this.firstPlayer === true && this.beurtenTemp !== 3) {
      this.beurtenTemp++;
      this.beurten = this.beurtenTemp;
      this.dobbel();
    } else if (this.firstPlayer === false && this.beurten !== 0) {
      this.beurten--;
      this.dobbel();
    } else {
      this.stop = true;
      this.dobbel();
    }

  }

  dobbel() {
    if (this.beurten !== 0 && this.stop === false) {
      let genereerDobbelstenen = new GenereerDobbelstenen();

      this.genereerNummers();
      genereerDobbelstenen.genereer(this.getal1, this.getal2);

      this.scoreboard.printen(this.getal1, this.getal2);

      this.clicked = true;
    }
  }

  genereerNummers() {
    this.getal1 = Math.ceil(Math.random() * 6);
    this.getal2 = Math.ceil(Math.random() * 6);
  }

  next() {
    if(this.clicked === true){
      this.beurten = this.beurtenTemp;

      this.players[0].score = this.scoreboard.printen(this.getal1, this.getal2);

      this.stop = false;
      this.clicked = false;

      this.sorteer();

      this.end();
    }
  }

  end() {
    if (this.players[0].score !== 0){

    for (let i = 0; i < this.players.length; i++){
      if (this.players[i].score === 'MEXX') {
        this.players[0].levens = this.players[0].levens-2;

        this.mexx = true;
      }else{
        this.mexx = false;
      }
    }

    if (this.mexx === false) {
      this.players[0].levens--;
    }

    this.beurtenTemp = 0;
    this.beurten = this.beurtenTemp;

    for (let i = 0; i < this.players.length; i++) {
      this.players[i].score = 0;
      if(this.players[i].levens <=0){
        let message = document.getElementById('loser');
        message.classList.remove('hide');
        message.innerHTML = `<p>Loser: ${this.players[0].naam}</p>`
      }
    }
    this.maakPlayerLijst();
    }
  }

  sorteer() {
    this.players = this.players.sort((obj1, obj2) => {
      if (obj1.score === 0) {
        return -1;
      } else if (obj1.score > obj2.score) {
        return 1;
      } else if (obj1.score === 'MEXX') {
        return 1;
      } else if (obj1.score < obj2.score) {
        return -1;
      }
      return 0;
    });
    this.maakPlayerLijst();
  }

  maakPlayerLijst() {
    let playerList = document.getElementById('players');
    playerList.innerHTML = '';

    for (let i = 0; i < this.players.length; i++) {
      playerList.innerHTML += `<h2>${this.players[i].naam}</h2>`;
      playerList.innerHTML += `<span>${this.players[i].levens}</span>`;
      playerList.innerHTML += `<p>Score: ${this.players[i].score}</p>`;
    }
    console.log(this.players);
  }

  constructor(private data: PlayerService) { }

  ngOnInit() {
    this.data.currentPlayers.subscribe(players => this.players = players);

    console.log(this.players);
    this.maakPlayerLijst();
  }
}
