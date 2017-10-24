import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangye127Component } from './hangye127.component';

describe('Hangye127Component', () => {
  let component: Hangye127Component;
  let fixture: ComponentFixture<Hangye127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangye127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangye127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
