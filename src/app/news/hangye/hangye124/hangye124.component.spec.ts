import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangye124Component } from './hangye124.component';

describe('Hangye124Component', () => {
  let component: Hangye124Component;
  let fixture: ComponentFixture<Hangye124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangye124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangye124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
