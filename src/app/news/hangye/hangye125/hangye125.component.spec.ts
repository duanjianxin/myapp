import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangye125Component } from './hangye125.component';

describe('Hangye125Component', () => {
  let component: Hangye125Component;
  let fixture: ComponentFixture<Hangye125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangye125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangye125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
