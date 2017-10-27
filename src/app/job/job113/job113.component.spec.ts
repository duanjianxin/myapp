import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job113Component } from './job113.component';

describe('Job113Component', () => {
  let component: Job113Component;
  let fixture: ComponentFixture<Job113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
