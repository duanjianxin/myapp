import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangye123Component } from './hangye123.component';

describe('Hangye123Component', () => {
  let component: Hangye123Component;
  let fixture: ComponentFixture<Hangye123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangye123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangye123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
