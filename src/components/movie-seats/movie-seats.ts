import { Component, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'movie-seats',
  templateUrl: 'movie-seats.html'
})
export class MovieSeatsComponent implements OnInit {
  types: Array<string> = ['All', 'Lovers', 'Family', 'Friends']
  leftSeats = { rows: 7, columns: 2 };
  rightSeats = { rows: 7, columns: 2 };
  middleSeats = { rows: 7, columns: 8 };
  state: boolean[][] = [];
  type: string = 'all';
  constructor() {

  }

  ngOnInit() : void{
    for (let r = 0; r < this.middleSeats.rows; r++) {
      this.state[r] = [];
      for (let c = 0; c < this.leftSeats.columns + this.rightSeats.columns + this.middleSeats.columns; c++) {
        this.state[r].push(true)
      }
    }
  }

  changeType(index) {
    switch (index) {
      case 0:
        this.all();
        break;
      case 1:
        this.lovers()
        break;
      case 2:
        this.family()
        break;
      case 3:
        this.friends()
        break;
      default:
        this.none()
        break;
    }
  }
  lovers() {
    this.none();
    this.type = 'lovers'
    this.state[1][0] = true;
    this.state[1][1] = true;
    this.state[this.leftSeats.rows - 1][0] = true;
    this.state[this.leftSeats.rows - 1][1] = true;

    this.state[3][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
    this.state[5][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[5][this.leftSeats.columns + this.middleSeats.columns + 1] = true;

    this.state[2][this.leftSeats.columns + 2] = true;
    this.state[2][this.leftSeats.columns + 3] = true;
    this.state[4][this.leftSeats.columns + 2] = true;
    this.state[4][this.leftSeats.columns + 3] = true;
    this.state[5][this.leftSeats.columns + 5] = true;
    this.state[5][this.leftSeats.columns + 6] = true;
    this.state[6][this.leftSeats.columns + 5] = true;
    this.state[6][this.leftSeats.columns + 6] = true;
    this.state[this.middleSeats.rows - 1][this.leftSeats.columns] = true;
    this.state[this.middleSeats.rows - 1][this.leftSeats.columns + 1] = true;
  }

  friends() {
    this.none();
    this.type = 'friends'
    this.state[1][0] = true;
    this.state[1][1] = true;
    this.state[2][0] = true;
    this.state[2][1] = true;

    for (let i = this.leftSeats.columns; i < this.leftSeats.columns + this.middleSeats.columns; i++) {
      this.state[this.middleSeats.rows - 1][i] = true;
    }
    for (let i = this.leftSeats.columns + 2; i < this.leftSeats.columns + this.middleSeats.columns; i++) {
      this.state[this.middleSeats.rows - 3][i] = true;
    }

    this.state[3][this.leftSeats.columns + this.middleSeats.columns - 1] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns - 2] = true;
    this.state[4][this.leftSeats.columns + this.middleSeats.columns - 1] = true;
    this.state[4][this.leftSeats.columns + this.middleSeats.columns - 2] = true;

    this.state[2][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[2][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
    this.state[4][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[4][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
  }


  family() {
    this.none();
    this.type = 'family'
    this.state[0][0] = true;
    this.state[0][1] = true;
    this.state[2][0] = true;
    this.state[2][1] = true;
    this.state[3][0] = true;
    this.state[3][1] = true;

    for (let i = this.leftSeats.columns; i < this.leftSeats.columns + this.middleSeats.columns; i++) {
      this.state[0][i] = true;
    }
    for (let i = this.leftSeats.columns; i < this.leftSeats.columns + this.middleSeats.columns; i++) {
      this.state[1][i] = true;
    }
    for (let i = this.leftSeats.columns + 2; i < this.leftSeats.columns + this.middleSeats.columns; i++) {
      this.state[2][i] = true;
    }

    this.state[3][this.leftSeats.columns + this.middleSeats.columns - 1] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns - 2] = true;
    this.state[4][this.leftSeats.columns + this.middleSeats.columns - 1] = true;
    this.state[4][this.leftSeats.columns + this.middleSeats.columns - 2] = true;

    this.state[0][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[0][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
    this.state[1][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[1][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns] = true;
    this.state[3][this.leftSeats.columns + this.middleSeats.columns + 1] = true;
  }

  all() {
    this.type = 'all'
    for (let r = 0; r < this.middleSeats.rows; r++) {
      for (let c = 0; c < this.leftSeats.columns + this.rightSeats.columns + this.middleSeats.columns; c++) {
        this.state[r][c] = true;
      }
    }
  }

  none() {
    this.type = 'none'
    for (let r = 0; r < this.middleSeats.rows; r++) {
      for (let c = 0; c < this.leftSeats.columns + this.rightSeats.columns + this.middleSeats.columns; c++) {
        this.state[r][c] = false;
      }
    }
  }


}
