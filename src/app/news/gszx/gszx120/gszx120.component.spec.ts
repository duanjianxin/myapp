import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gszx120Component } from './gszx120.component';

describe('Gszx120Component', () => {
  let component: Gszx120Component;
  let fixture: ComponentFixture<Gszx120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gszx120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gszx120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
