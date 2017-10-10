import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanganComponent } from './fangan.component';

describe('FanganComponent', () => {
  let component: FanganComponent;
  let fixture: ComponentFixture<FanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
