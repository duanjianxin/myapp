import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanganXiaofeiComponent } from './fangan-xiaofei.component';

describe('FanganXiaofeiComponent', () => {
  let component: FanganXiaofeiComponent;
  let fixture: ComponentFixture<FanganXiaofeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanganXiaofeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanganXiaofeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
