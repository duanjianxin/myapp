import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gszx112Component } from './gszx112.component';

describe('Gszx112Component', () => {
  let component: Gszx112Component;
  let fixture: ComponentFixture<Gszx112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gszx112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gszx112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
