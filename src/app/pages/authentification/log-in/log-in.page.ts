import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ForgotCodeComponent } from 'src/app/components/forgot-code/forgot-code.component';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  loginform: FormGroup;
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public service: Service) {

  }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      code: new FormControl('', [Validators.required]),
    });
  }
  forgotCode() {
    this.modalCtrl.create({
      component: ForgotCodeComponent,
      cssClass: 'my-custom-modal-css'
    }).then((modal) => {
      modal.present();
    });
  }
  validate() {
    this.service.ValidateCode(this.loginform.get('code').value)
      .subscribe((result) => {
        console.log(result);
        if (result.error) {
          alert(result.message);
        } else {
          // register code
          this.router.navigate([result.redirectTo]);
        }
      }, err => {
        console.log('error while checking code ', err);

      });

  }

}
