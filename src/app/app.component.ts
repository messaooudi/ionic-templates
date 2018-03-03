import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { trigger, animateChild, transition, animate, query, stagger, style } from '@angular/animations';

@Component({
  templateUrl: 'app.html',
  animations: [
    trigger('animation', [
      transition(':enter', [
        query('*', style({ opacity: 0, transform: 'translateX(-80px)' })),
        query('*', [
          stagger(100, [
            style({ opacity: 0, transform: 'translateX(-80px)' }),
            animate('250ms ease-out')
          ])
        ])
      ])
    ])
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'InteractiveCardPage';
  pages: Array<{ title: string, icon: string, component: any, push: string }>;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Items List', icon: 'ios-list-box-outline', component: 'ListPage', push: 'setRoot' },
      { title: 'Interactive Card', icon: 'ios-keypad-outline', component: 'InteractiveCardPage', push: 'setRoot' },
      { title: 'Meeting Scheduler', icon: 'ios-clock-outline', component: 'MeetingPage', push: 'setRoot' },
    ]
  }

  openPage(page) {
    this.menu.close();
    if (this.nav.last().component.name != page.component) {
      this.nav[page.push](page.component);
    }
  }
}

