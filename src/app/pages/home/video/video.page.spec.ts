import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { videoPage } from './video.page';

describe('videoPage', () => {
  let component: videoPage;
  let fixture: ComponentFixture<videoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [videoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(videoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
