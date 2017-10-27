import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job115Component } from './job115.component';

describe('Job115Component', () => {
  let component: Job115Component;
  let fixture: ComponentFixture<Job115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
