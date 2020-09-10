import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  //heroes = HEROES;
  //selectedHero: Hero;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  ngOnInit() {
  }
 /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(firebaseConfig);
  }
}
