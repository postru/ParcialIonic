import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanerPage } from './scaner.page';

describe('ScanerPage', () => {
  let component: ScanerPage;
  let fixture: ComponentFixture<ScanerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
