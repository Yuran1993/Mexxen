export class Scoreboard{
  scoreList: string[] = [];

  printen(getal1: number, getal2: number): number | string{
    let board: HTMLElement = document.getElementById('scoreboard');
    let score: number | string;

    if(getal1 === 1 && getal2 === 2 || getal1 === 2 && getal2 === 1){
      score ='MEXX';
    }else if(getal1 === getal2){
      score = String(getal1*100);
    }else if(getal1>getal2){
      score = String(getal1) + String(getal2);
    }else{
      score = String(getal2) + String(getal1);
    }

    board.innerHTML = `<h2>${score}</h2>`;
    this.scoreList.unshift(`<p>${score}</p>`)

    if(score === 'MEXX')
      board.querySelector('h2').style.color= 'red';

    // this.printLijst();

    if(score === 'MEXX'){
      return score;
    }else{
      return parseInt(score);
    }
  }

  // printLijst(): void{
  //   let lijst: HTMLElement = document.getElementById('scoreList');
  //
  //   lijst.innerHTML = this.scoreList.join(' ');
  //
  //   if(this.scoreList.length>5)
  //     this.scoreList.pop();
  // }

}
