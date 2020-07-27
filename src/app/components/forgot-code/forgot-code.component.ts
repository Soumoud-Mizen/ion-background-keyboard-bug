import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-code',
  templateUrl: './forgot-code.component.html',
  styleUrls: ['./forgot-code.component.scss'],
})
export class ForgotCodeComponent implements OnInit {
  codeForm:FormGroup
  constructor(public navCtrl: ModalController) { }

  ngOnInit() {
    this.codeForm = new FormGroup({
      email: new FormControl('', [Validators.required])
    });
  }
  closeModal(){
    this.navCtrl.dismiss();  }
}
