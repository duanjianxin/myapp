import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job119Component } from './job119.component';

describe('Job119Component', () => {
  let component: Job119Component;
  let fixture: ComponentFixture<Job119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
