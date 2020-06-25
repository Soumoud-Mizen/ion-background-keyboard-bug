import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaeightPage } from './novaeight.page';
import { NovaeightPageRoutingModule } from './novaeight-routing.module';

describe('Tab3Page', () => {
  let component: NovaeightPage;
  let fixture: ComponentFixture<NovaeightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NovaeightPage],
      imports: [IonicModule.forRoot(), NovaeightPage]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaeightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
