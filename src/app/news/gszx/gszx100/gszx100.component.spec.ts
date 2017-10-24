import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gszx100Component } from './gszx100.component';

describe('Gszx100Component', () => {
  let component: Gszx100Component;
  let fixture: ComponentFixture<Gszx100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gszx100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gszx100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
