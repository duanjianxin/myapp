import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job117Component } from './job117.component';

describe('Job117Component', () => {
  let component: Job117Component;
  let fixture: ComponentFixture<Job117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
