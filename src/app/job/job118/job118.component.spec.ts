import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job118Component } from './job118.component';

describe('Job118Component', () => {
  let component: Job118Component;
  let fixture: ComponentFixture<Job118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
