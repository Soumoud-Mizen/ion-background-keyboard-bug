import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  range = 12;
  value = 200;
  ranger;
  constructor() { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    const height = this.div.nativeElement.offsetHeight;
    const marginTopInput = (height / 2) - 16;const marginTopTicks = (height / 2) - 21;
    this.input.nativeElement.style.width = height - 30 + 'px';
    this.input.nativeElement.style.transform = `translate(-36%, ${marginTopInput}px) rotate(-90deg)`;
    this.ticks.nativeElement.style.width = height - 30 + 'px';
    this.ticks.nativeElement.style.transform = `translate(-44%, ${marginTopTicks}px) rotate(-90deg)`;
    console.log('margin top ', marginTopInput + " " + marginTopTicks);
  }
  change() {
    if (this.between(this.range, 10, 30)){
    
  }
    if (this.between(this.range, 40, 70 )){
    
  }

    if (this.between(this.range, 80, 120)){
   
}

  }
  between(x, min, max) {
    return x >= min && x <= max;
  }
}
