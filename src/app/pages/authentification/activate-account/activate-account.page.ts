import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.page.html',
  styleUrls: ['./activate-account.page.scss'],
})
export class ActivateAccountPage implements OnInit {
  createAccount:FormGroup
  constructor() { }

  ngOnInit() {
    this.createAccount = new FormGroup({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      portable: new FormControl(''),
      wilaya: new FormControl('', [Validators.required]),
      
    });
  }

}
