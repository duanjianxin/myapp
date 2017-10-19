import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanganDianyuanComponent } from './fangan-dianyuan.component';

describe('FanganDianyuanComponent', () => {
  let component: FanganDianyuanComponent;
  let fixture: ComponentFixture<FanganDianyuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanganDianyuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanganDianyuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
