import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gszx110Component } from './gszx110.component';

describe('Gszx110Component', () => {
  let component: Gszx110Component;
  let fixture: ComponentFixture<Gszx110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gszx110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gszx110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
