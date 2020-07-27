import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  wilaya = [
    'ADRAR	SHIE',
    'CHLEF	SMRD',
    'LAGHOUAT	MOUI',
    'OUM EL BOUAGHI	LHBC',
    'BATNA	LHBC',
    'BEJAIA	MOUI',
    'BISKRA	LHBC',
    'BECHAR	SHIE',
    'BLIDA	MOUI',
    'BOUIRA	MOUI',
    'TAMANRASSET	MOUI',
    'TEBESSA	LHBC',
    'TLEMCEN	SHIE',
    'TIARET	SHIE',
    'TIZI OUZOU	MOUI',
    'ALGER	MOUI',
    'ALGER	SMRD',
    'DJELFA	MOUI',
    'JIJEL	LHBC',
    'SETIF	LHBC',
    'SAIDA	SHIE',
    'SKIKDA	LHBC',
    'SIDI BEL ABBES	SHIE',
    'ANNABA	LHBC',
    'GUELMA	LHBC',
    'CONSTANTINE	LHBC',
    'MEDEA	SMRD',
    'MOSTAGANEM	SHIE',
    'MSILA	LHBC',
    'MASCARA	SHIE',
    'OUARGLA	MOUI',
    'ORAN	SHIE',
    'EL BAYADH	SHIE',
    'ILLIZI	LHBC',
    'BBA	LHBC',
    'BOUMERDES	MOUI',
    'EL TARF	LHBC',
    'TINDOUF	SHIE',
    'TISSEMSILT	SHIE',
    'EL OUED	LHBC',
    'KHENCHELA	LHBC',
    'SOUK AHRAS	LHBC',
    'TIPAZA	MOUI',
    'MILA	LHBC',
    'AIN DEFLA	SMRD',
    'NAAMA	SHIE',
    'AIN TEMOUCHENT	SHIE',
    'GHARDAIA	SMRD',
    'RELIZANE	SHIE'
  ]
  createAccount:FormGroup
  constructor() { }

  ngOnInit() {
    this.createAccount = new FormGroup({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      portable: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      wilaya: new FormControl('', [Validators.required]),
      TAndC:new FormControl(false),
      emailfeed: new FormControl(false)
    });
  }
  processForm() {
    console.log(this.createAccount.value);
    
  }
}
