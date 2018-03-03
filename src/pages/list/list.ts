import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';
import { trigger, animateChild, transition, animate, query, stagger } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  animations: [
    trigger('animation', [
      transition(':enter', [
        query('@animation',
          stagger(200, [animateChild()])
          , { optional: true, delay: 100 }),
      ])
    ])
  ]
})
export class ListPage {
  @ViewChild(Slides) slides: Slides;
  languages : {language : string , rates: { easy: number, support: number, performance: number }}[] = []

  constructor() {
    this.languages.push({
      language : 'java',
      rates : {easy : 8,support : 9,performance:8}
    });
    this.languages.push({
     language : 'kotlin',
     rates : {easy : 8,support : 6,performance:8}
   })
  }

}
