import { Component, Input } from '@angular/core';
import { trigger, animateChild, transition, animate, query, stagger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'interactive-avatar',
  templateUrl: 'interactive-avatar.html',
  animations: [
    trigger('animation', [
      transition(':enter',
        [
          animate('.3s ease-in-out', keyframes([
            style({ transform: 'scale(0.8)', offset: 0 }),
            style({ transform: 'scale(1.4)', offset: 0.7 }),
            style({ transform: 'scale(1)', offset: 1 }),
          ]))
        ]
      )
    ])
  ]
})
export class InteractiveAvatarComponent {

  checked: boolean = false;
  @Input() img: string = '';
  constructor() {
  }
  getImg(): string {
    return `url(${this.img})`;
  }
}
