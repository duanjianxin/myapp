import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job116Component } from './job116.component';

describe('Job116Component', () => {
  let component: Job116Component;
  let fixture: ComponentFixture<Job116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
