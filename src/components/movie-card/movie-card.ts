import { Component, ViewChild, Renderer2, ChangeDetectorRef, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { trigger, animateChild, transition, animate, query, stagger, style } from '@angular/animations';

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html',
  animations: [
    trigger('animation', [
      transition(':enter',
        [
          style({ opacity: 0, height: '0px', transform: 'translateY(-100%)' }),
          animate(350)
        ]
      )
    ])
  ]
})
export class MovieCardComponent implements OnInit {

  showMore: boolean = false;
  showSeats: boolean = false;
  @Input() movie : {whens : Array<string>,showTimes: Array<string>, movieInfo: {title : string,types : string,rate : string ,likes : string}}
  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
  }
  details() {
    this.showMore = !this.showMore;
    this.showSeats = this.showSeats && this.showMore
  }

  seats() {
    this.showSeats = !this.showSeats;
  }
}
