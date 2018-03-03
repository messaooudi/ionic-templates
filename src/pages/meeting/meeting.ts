import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { trigger, animateChild, transition, animate, query, stagger, style } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
  animations: [
    trigger('animation', [
      transition(':enter', [
        query('ion-row', style({ opacity: 0, transform: 'translateX(-80px)' })),
        query('ion-row', [
          stagger(100, [
            style({ opacity: 0, transform: 'translateX(-80px)' }),
            animate('250ms ease-out')
          ])
        ])
      ])
    ])
  ]
})
export class MeetingPage {
  @ViewChild(Slides) slides: Slides;
  languages: { language: string, rates: { easy: number, support: number, performance: number } }[] = []

  startDate: Date = null;
  endDate: Date = null;

  constructor(public navCtrl: NavController, private datePicker: DatePicker) {
    this.languages.push({
      language: 'java',
      rates: { easy: 7.5, support: 8, performance: 7.5 }
    });
    this.languages.push({
      language: 'kotlin',
      rates: { easy: 8, support: 6.5, performance: 9 }
    })
  }

  ionViewDidLoad() {

  }

  setStartDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      is24Hour: true,
      allowOldDates: false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.startDate = date,
      err => console.log('Error occurred while getting date: ', err)
      );
  }
  setEndDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      is24Hour: true,
      allowOldDates: false,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.endDate = date,
      err => console.log('Error occurred while getting date: ', err)
      );
  }

}
