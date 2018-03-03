import { Component } from '@angular/core';
import { trigger, group, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'avatar-list-item',
  templateUrl: 'avatar-list-item.html',
  animations: [
    trigger('animation', [
      transition(':enter', [
        group([
          query('*', [style({ opacity: 0 }), animate('0.45s ease-out')]),
          query('h2,p,ion-note', [style({ width: 0 }), animate('0.45s 0.15s ease-out')]),
          query('ion-avatar',
            animate('0.6s ease-out', keyframes([
              style({ transform: 'scale(0.10)', offset: 0 }),
              style({ transform: 'scale(1.22)', offset: 0.5 }),
              style({ transform: 'scale(0.93)', offset: 0.65 }),
              style({ transform: 'scale(1.12)', offset: 0.78 }),
              style({ transform: 'scale(0.96)', offset: 0.91 }),
              style({ transform: 'scale(1.00)', offset: 1.0 }),
            ])))
        ]),

      ])
    ])
  ]
})
export class AvatarListItemComponent {
  constructor() {
  }
}
