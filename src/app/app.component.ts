import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { infos } from './info';
import { levenshteinEditDistance } from 'levenshtein-edit-distance';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title = 'angular-material-app';
  isHovered = false;
  selection: string = '-';
  difficulty: number = -1;
  hearts: { empty: boolean }[] = Array(5).fill({ empty: false });
  picked: { empty: number }[] = [];
  score: number = 0;
  answered = 0;
  randomIndex: number = -1;
  inputValue: string = '';
  showNextPage: boolean = false;
  goGame: boolean = false;
  answersrc: string = '';
  showColourRack: boolean = true;
  showTextBox: boolean = true;
  showAnswerImg: boolean = false;
  showResult: boolean = false;
  answerText: string = '';
  promptText: string = 'What is this logo?';
  selectTheme(theme: string): void {
    this.selection = theme;
  }
  selectDifficulty(Difficulty: number): void {
    this.difficulty = Difficulty;
  }
  goToNextPage(): void {
    this.showNextPage = true;
  }
  goToHomePage(): void {
    this.showNextPage = false;
  }

  primary = '';
  secondary = '';
  others: string[] = [];
  getColours() {
    this.promptText = 'What is this logo?';
    this.answerText = '';
    function getRandomNumber(max: number): number {
      return Math.floor(Math.random() * max);
    }
    let randomInfo;
    console.log(this.picked);
    console.log(this.picked.length);
    do {
      this.randomIndex = getRandomNumber(infos.length);
      randomInfo = infos[this.randomIndex];
    } while (
      randomInfo.category !== this.selection ||
      this.isAlreadyPicked(this.randomIndex)
    );

    this.picked.push({ empty: randomInfo.id });
    if (this.difficulty == 0) {
      this.primary = randomInfo.primary;
      this.secondary = randomInfo.secondary;
      this.others = randomInfo.others;
    } else if (this.difficulty == 1) {
      this.primary = '';
      this.secondary = '';
      this.others = randomInfo.others;
      if (randomInfo.primary.includes('#')) {
        this.others.push(randomInfo.primary);
      }
      if (randomInfo.secondary.includes('#')) {
        this.others.push(randomInfo.secondary);
      }
      this.shuffleArray(this.others);
    } else if (this.difficulty == 2) {
      this.hearts.splice(3);
      this.primary = '';
      this.secondary = '';
      this.others = randomInfo.others;
      if (randomInfo.primary.includes('#')) {
        this.others.push(randomInfo.primary);
      }
      if (randomInfo.secondary.includes('#')) {
        this.others.push(randomInfo.secondary);
      }
      this.shuffleArray(this.others);
      if (this.others.length > 3) {
        this.others.splice(3); // Keep only the first 3 elements, removing the rest
      }
    }
    this.answersrc = randomInfo.link;
  }
  isAlreadyPicked(index: number): boolean {
    return this.picked.some((item) => item.empty === index);
  }
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  checkSimilarity(): void {
    const distance = levenshteinEditDistance(
      this.inputValue,
      infos[this.randomIndex].name
    );
    if (distance <= 2) {
      console.log('Input is similar.');
      this.score += 1;
      this.showColourRack = false;
      this.showTextBox = false;
      this.showAnswerImg = true;
      this.promptText = '';
      this.answerText =
        'The colour palette is for ' + infos[this.randomIndex].name;
    } else {
      console.log('Input is not similar.');
      this.hearts = this.hearts.slice(0, this.hearts.length - 1);
      if (this.hearts.length == 0) {
        this.showColourRack = false;
        this.showTextBox = false;
        this.showAnswerImg = true;
        this.promptText = '';
        this.answerText =
          'The colour palette is for ' + infos[this.randomIndex].name + '!';
      }
    }
    if(this.answered==5){

      this.finishGame();
    }
    this.inputValue = '';
  }
refreshGame():void{
  this.selection = '-';
  this.difficulty = -1;
  this.hearts= Array(5).fill({ empty: false });
  this.picked= [];
  this.score = 0;
  this.answered = 5;
  this.randomIndex = -1;
  this.inputValue = '';
  this.showNextPage = false;
  this.goGame = false;
  this.answersrc= '';
  this.showColourRack = true;
  this.showTextBox = true;
  this.showAnswerImg = false;
  this.answerText= '';
  this.promptText = 'What is this logo?';


}
  goToGame(): void {
    this.hearts= Array(5).fill({ empty: false });
    this.answered += 1;
    this.showColourRack = true;
    this.goGame = true;
    this.showTextBox = true;
    this.showAnswerImg = false;
    this.showResult=false;
    this.promptText = 'What is this logo?';
    this.answerText = '';
    setTimeout(() => {
      // fat arrow
      this.getColours(); // Getting error this.functionTwo is not a function
    });
  }

  finishGame(): void {
    this.showResult= true;
    this.showAnswerImg=false;
    this.showTextBox=false;
  }

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

  
}
