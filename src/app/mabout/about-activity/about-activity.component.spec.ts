import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutActivityComponent } from './about-activity.component';

describe('AboutActivityComponent', () => {
  let component: AboutActivityComponent;
  let fixture: ComponentFixture<AboutActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
