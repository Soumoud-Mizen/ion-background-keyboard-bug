import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcivateAccountPage } from './acivate-account.page';

describe('AcivateAccountPage', () => {
  let component: AcivateAccountPage;
  let fixture: ComponentFixture<AcivateAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcivateAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcivateAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
