import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.page.html',
  styleUrls: ['./activate-account.page.scss'],
})
export class ActivateAccountPage implements OnInit {
  createAccount: FormGroup;
  wilaya = [
    {
      id: 1,
      name: 'ADRAR'
    },
    {
      id: 2,
      name: 'CHLEF'
    },
    {
      id: 3,
      name: 'LAGHOUAT'
    },
    {
      id: 4,
      name: 'OUM EL BOUAGHI'
    },
    {
      id: 5,
      name: 'BATNA'
    },
    {
      id: 6,
      name: 'BEJAIA'
    },
    {
      id: 7,
      name: 'TEBESSA'
    },
    {
      id: 8,
      name: 'BISKRA'
    },
    {
      id: 9,
      name: 'BECHAR'
    },
    {
      id: 10,
      name: 'BLIDA'
    },
    {
      id: 11,
      name: 'BOUIRA'
    },
    {
      id: 12,
      name: 'TAMANRASSET'
    },
    {
      id: 13,
      name: 'TLEMCEN'
    },
    {
      id: 14,
      name: 'TIARET'
    },
    {
      id: 15,
      name: 'TIZI OUZOU'
    },
    {
      id: 16,
      name: 'ALGER'
    },
    {
      id: 17,
      name: 'DJELFA'
    },
    {
      id: 18,
      name: 'JIJEL'
    },
    {
      id: 19,
      name: 'SETIF'
    },
    {
      id: 20,
      name: 'SAIDA'
    },
    {
      id: 21,
      name: 'SKIKDA'
    },
    {
      id: 22,
      name: 'SIDI BEL ABBES'
    },
    {
      id: 23,
      name: 'ANNABA'
    },
    {
      id: 24,
      name: 'GUELMA'
    },
    {
      id: 25,
      name: 'CONSTANTINE'
    },
    {
      id: 26,
      name: 'MEDEA'
    },
    {
      id: 27,
      name: 'MOSTAGANEM'
    },
    {
      id: 28,
      name: 'M\'SILA'
    },
    {
      id: 29,
      name: 'MASCARA'
    },
    {
      id: 30,
      name: 'OUARGLA'
    },
    {
      id: 31,
      name: 'ORAN'
    },
    {
      id: 32,
      name: 'EL BAYADH'
    },
    {
      id: 33,
      name: 'ILLIZI'
    },
    {
      id: 34,
      name: 'BBA'
    },
    {
      id: 35,
      name: 'BOUMERDES'
    },
    {
      id: 36,
      name: 'EL TARF'
    },
    {
      id: 37,
      name: 'TINDOUF'
    },
    {
      id: 38,
      name: 'TISSEMSILT'
    },
    {
      id: 39,
      name: 'EL OUED'
    },
    {
      id: 40,
      name: 'KHENCHELA'
    },
    {
      id: 41,
      name: 'SOUK AHRAS'
    },
    {
      id: 42,
      name: 'TIPAZA'
    },
    {
      id: 43,
      name: 'MILA'
    },
    {
      id: 44,
      name: 'AIN DEFLA'
    },
    {
      id: 45,
      name: 'NAAMA'
    },
    {
      id: 46,
      name: 'AIN TEMOUCHENT'
    },
    {
      id: 47,
      name: 'GHARDAIA'
    },
    {
      id: 48,
      name: 'RELIZANE'
    }
  ];
  constructor(
    public router: Router,
    public service: Service) { }

  ngOnInit() {
    this.createAccount = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      portable: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      wilaya: new FormControl('', [Validators.required]),
      tAndC: new FormControl(false),
      notifEmail: new FormControl(false)
    });
    this.service.getwilaya().subscribe((result) => {
      this.wilaya = result;
    });
  }
  activateAccount() {
    const data = this.createAccount.value;
    data.wilaya = data.wilaya * 1;
    // remove it after fixing bugs on backend side
    this.service.registerUser(data).subscribe((responce) => {
      if (responce.error) {

        alert(responce.message);
      } else {
        this.router.navigate(['log-in']);
      }
      console.log(responce);

    });


  }

}
