import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlayerService {

  private players = new BehaviorSubject([]);
  currentPlayers = this.players.asObservable();

  constructor() { }
  changePlayers(...players:object[]){
    this.players.next(players);
  }


}
