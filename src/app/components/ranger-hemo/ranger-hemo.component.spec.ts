import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangerHemoComponent } from './ranger-hemo.component';

describe('RangerHemoComponent', () => {
  let component: RangerHemoComponent;
  let fixture: ComponentFixture<RangerHemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangerHemoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangerHemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
