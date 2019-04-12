
export class GenereerDobbelstenen{
  dobbelsteen1: HTMLElement = document.getElementById('dobbelsteen1');
  dobbelsteen2: HTMLElement = document.getElementById('dobbelsteen2');

  value1: string = '';
  value2: string = '';

  genereer(getal1: number, getal2?:number): void{
    let classSoort1: string;
    let classSoort2: string;
    getal1 === 5 ? classSoort1 = 'five' : classSoort1 = 'visable';
    getal2 === 5 ? classSoort2 = 'five' : classSoort2 = 'visable';

    for (let i = 0; i < getal1; i++) {
        this.value1 += `<span class ="${classSoort1}"></span>`;
    }

    for (let i = 0; i < getal2; i++) {
        this.value2 += `<span class ="${classSoort2}"></span>`;
    }

    this.dobbelsteen1.innerHTML = this.value1;
    this.dobbelsteen2.innerHTML = this.value2;
  }
}
