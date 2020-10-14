import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

  constructor(public service: Service, public modalCtrl: ModalController) { }

  ngOnInit() { }
  acceptTerms() {
    console.log(this.service.terms);
    
    this.service.terms = true;
    this.modalCtrl.dismiss();
  }
}
