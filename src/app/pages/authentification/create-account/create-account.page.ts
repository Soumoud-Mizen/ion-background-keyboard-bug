import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  wilaya = [
    'ADRAR',
    'CHLEF',
    'LAGHOUAT',
    'OUM EL BOUAGHI',
    'BATNA',
    'BEJAIA',
    'BISKRA',
    'BECHAR',
    'BLIDA',
    'BOUIRA',
    'TAMANRASSET',
    'TEBESSA',
    'TLEMCEN',
    'TIARET',
    'TIZI OUZOU',
    'ALGER',
    'DJELFA',
    'JIJEL',
    'SETIF',
    'SAIDA',
    'SKIKDA',
    'SIDI BEL ABBES',
    'ANNABA',
    'GUELMA',
    'CONSTANTINE',
    'MEDEA',
    'MOSTAGANEM',
    'MSILA',
    'MASCARA',
    'OUARGLA',
    'ORAN',
    'EL BAYADH',
    'ILLIZI',
    'BBA',
    'BOUMERDES',
    'EL TARF',
    'TINDOUF',
    'TISSEMSILT',
    'EL OUED',
    'KHENCHELA',
    'SOUK AHRAS',
    'TIPAZA',
    'MILA',
    'AIN DEFLA',
    'NAAMA',
    'AIN TEMOUCHENT',
    'GHARDAIA',
    'RELIZANE'
  ];
  acountForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.acountForm = new FormGroup({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      portable: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      wilaya: new FormControl('', [Validators.required]),
      TAndC: new FormControl(false),
      notifEmail: new FormControl(false)
    });
  }
  createAccount() {
    console.log(this.acountForm.value);

  }
}
