import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcpComponent } from './dlcp.component';

describe('DlcpComponent', () => {
  let component: DlcpComponent;
  let fixture: ComponentFixture<DlcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
