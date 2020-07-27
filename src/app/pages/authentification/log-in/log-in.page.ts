import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ForgotCodeComponent } from 'src/app/components/forgot-code/forgot-code.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  loginform: FormGroup;
  constructor(
    public modalCtrl: ModalController) { }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      code: new FormControl('', [Validators.required]),

    });
  }
  forgotCode() {
    this.modalCtrl.create({
      component: ForgotCodeComponent,
      
    }).then((modal) => {
      modal.present();
    });
  }


}
