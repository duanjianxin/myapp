import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthomeComponent } from './abouthome.component';

describe('AbouthomeComponent', () => {
  let component: AbouthomeComponent;
  let fixture: ComponentFixture<AbouthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
