import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanganHomeComponent } from './fangan-home.component';

describe('FanganHomeComponent', () => {
  let component: FanganHomeComponent;
  let fixture: ComponentFixture<FanganHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanganHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanganHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
