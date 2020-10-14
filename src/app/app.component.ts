import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Service } from './services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public rcpListTable: any = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public service: Service,
    public router: Router
  ) {
    this.initializeApp();
    this.getRcp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.service.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['tabs/calculateur']);
        } else {
          this.router.navigate(['log-in']);
        }
      });
    });

  }

  getRcp() {
    this.service.getRcp().subscribe((result) => {
      this.rcpListTable = result;
      this.service.currentRcp = this.rcpListTable.sections[0].content;
    });
  }
  openRcp(key) {
    console.log(this.rcpListTable.sections);
    this.service.currentRcp = this.rcpListTable.sections[key].content;
  }
  openIntro() {
    this.service.currentRcp = this.rcpListTable.header.subTitle + '<br> ' + this.rcpListTable.header.header ;
  }
}
