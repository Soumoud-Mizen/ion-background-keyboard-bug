import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import ageOptions from '../../../ages';
import { from } from 'rxjs';
@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.page.html',
  styleUrls: ['./calculateur.page.scss'],
})

export class CalculateurPage implements OnInit {
  @ViewChild('ranger') div: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('ticks') ticks: ElementRef;

  segment = 'hemoragie';
  range = 30;
  value = 200;
  weightHemo = '25';
  constructor(public picker: PickerController) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    const height = this.div.nativeElement.offsetHeight;
    const marginTopInput = (height / 2) - 16; const marginTopTicks = (height / 2) - 21;
    this.input.nativeElement.style.width = height - 30 + 'px';
    this.input.nativeElement.style.transform = `translate(-34%, ${marginTopInput}px) rotate(-90deg)`;
    this.ticks.nativeElement.style.width = height - 30 + 'px';
    this.ticks.nativeElement.style.transform = `translate(-45%, ${marginTopTicks}px) rotate(-90deg)`;
  }
  change() {
    if (this.between(this.range, 10, 30)) {

    }
    if (this.between(this.range, 40, 70)) {

    }

    if (this.between(this.range, 80, 120)) {

    }

  }
  async openPicker(event) {
    if (!event.cancelable) { event.preventDefault(); }
    const opt: PickerOptions = {
      buttons: [{
        text: 'Annuler',
        role: 'cancel'
      },
      {
        text: 'valider'
      }],
      columns: [{
        name: 'age',
        selectedIndex: 20,
        options: ageOptions
      }]
    };
    const picker = await this.picker.create(opt);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('age');
      this.weightHemo = col.options[col.selectedIndex].text;
      col.options.forEach(element => {
        delete element.duration;
        delete element.transform;
      });
    });
  }
  submitHemo() {
    console.log('age : ', this.weightHemo, ' intensité : ', this.detectHemoRanger(this.range));

  }
  between(x, min, max) {
    return x >= min && x <= max;
  }
  detectHemoRanger(range) {
    switch (range) {
      case 10: {
        return 20;
        break;
      }
      case 20: {
        return 30;
        break;
      }
      case 30: {
        return 40;
        break;
      }
      case 40: {
        return 30;
        break;
      }
      case 50: {
        return 40;
        break;
      }
      case 60: {
        return 50;
        break;
      }
      case 70: {
        return 60;
        break;
      }
      case 80: {
        return 60;
        break;
      }
      case 90: {
        return 70;
        break;
      }
      case 100: {
        return 80;
        break;
      }
      case 110: {
        return 90;
        break;
      }
      case 120: {
        return 100;
        break;
      }
      default: {
        return 10;
        break;
      }
    }
  }
}
