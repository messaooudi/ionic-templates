import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, MenuController } from 'ionic-angular';
import { trigger, animateChild, transition, animate, query, stagger, style } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-interactive-card',
  templateUrl: 'interactive-card.html',
  animations: [
    trigger('animation', [
      transition(':enter', [
        query('movie-card', style({ opacity: 0.5, transform: 'translateY(-30px)' })),
        query('movie-card', [
          stagger(80, [
            style({ opacity: 0.5, transform: 'translateY(-30px)' }),
            animate('450ms ease-out')
          ])
        ])
      ])
    ])
  ]
})
export class InteractiveCardPage {

  @ViewChild(Slides) slides: Slides;
  languages : {language : string , rates: { easy: number, support: number, performance: number }}[] = []
  movies: { movieInfo: any, whens: string[], showTimes: string[] }[] = [];

  constructor(public menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.languages.push({
     language : 'java',
     rates : {easy : 7,support : 9,performance:8}
   });
   this.languages.push({
    language : 'kotlin',
    rates : {easy : 8.5,support : 7,performance:8.5}
  })
    this.movies.push({
      movieInfo: { title: 'Return Of Xander', types: 'Action | Adventure | Science', rate: '7.5 IMDB', likes: '95%' },
      whens: ['Today', 'Tommorow', 'Wed.21', 'Thurs.22'],
      showTimes: ['All', 'Morning', 'Afternoon', 'Night']
    })
    this.movies.push({
      movieInfo: { title: 'Before We Go', types: 'Drama | Adventure', rate: '8.5 IMDB', likes: '75%' },
      whens: ['Tommorow', 'Mond.01', 'Thurs.04','Sat.08'],
      showTimes: ['All', 'Morning', 'Afternoon', 'Night']
    })
  }

  ionViewDidLoad() {
  }



}
