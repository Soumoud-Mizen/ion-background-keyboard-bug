import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
loginform: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required]),
      
    });
  }

 

}
