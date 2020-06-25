import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalculateurPage } from './calculateur.page';

describe('CalculateurPage', () => {
  let component: CalculateurPage;
  let fixture: ComponentFixture<CalculateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
