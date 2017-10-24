import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gszx35Component } from './gszx35.component';

describe('Gszx35Component', () => {
  let component: Gszx35Component;
  let fixture: ComponentFixture<Gszx35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gszx35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gszx35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
