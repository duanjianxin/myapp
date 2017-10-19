import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanganIotComponent } from './fangan-iot.component';

describe('FanganIotComponent', () => {
  let component: FanganIotComponent;
  let fixture: ComponentFixture<FanganIotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanganIotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanganIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
