import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() language: string = '';
  @Input() rates: { easy: number, support: number, performance: number } = { easy: 0, support: 0, performance: 0 };
  constructor() {

  }

}
