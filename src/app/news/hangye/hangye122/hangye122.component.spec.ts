import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangye122Component } from './hangye122.component';

describe('Hangye122Component', () => {
  let component: Hangye122Component;
  let fixture: ComponentFixture<Hangye122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangye122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangye122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
