import { Injectable } from '@angular/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    public platform: Platform,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) { }
  async presentToast(text) {
    if (this.platform.is('android')) {
      const toast = await this.toastCtrl.create({
        message: text,
        duration: 2000
      });
      toast.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        message: text,
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      });
      alert.present();

    }

  }
}
