import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job114Component } from './job114.component';

describe('Job114Component', () => {
  let component: Job114Component;
  let fixture: ComponentFixture<Job114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
