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
 
  segment = 'hemoragie'
  range = 12
  value = 200;
  ranger
  constructor() { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    let height = this.div.nativeElement.offsetHeight;
    this.input.nativeElement.style.width = height - 40 + 'px'
    this.ticks.nativeElement.style.width = height - 40 + 'px'
    console.log("height ranger div ", height);
  }
  change() {
    if (this.between(this.range, 10, 30)){
     
      
  }
    if (this.between(this.range, 40,70 )){
    
  }

    if (this.between(this.range, 80, 120)){
   
}

  }
  between(x, min, max) {
    return x >= min && x <= max;
  }
}
