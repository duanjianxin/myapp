import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanganLEDComponent } from './fangan-led.component';

describe('FanganLEDComponent', () => {
  let component: FanganLEDComponent;
  let fixture: ComponentFixture<FanganLEDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanganLEDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanganLEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
