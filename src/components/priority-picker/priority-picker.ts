import { Component } from '@angular/core';
import { trigger, animateChild, transition, animate, query, stagger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'priority-picker',
  templateUrl: 'priority-picker.html',
  animations: [
    trigger('animation', [
      transition(':enter',
        [
          animate('0.3s ease-in', keyframes([
            style({ transform: 'scale(0.2) rotate(-90deg)', offset: 0 }),
            style({ transform: 'scale(0.7) rotate(15deg)', offset: 0.7 }),
            style({ transform: 'scale(1) rotate(45deg)', offset: 1 }),
          ]))
        ]
      ),
    ])
  ]
})
export class PriorityPickerComponent {

  active: boolean = false;
  color: string = "green"
  constructor() {

  }

}
