import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDashboardComponent } from './single-dashboard.component';

describe('SingleDashboardComponent', () => {
  let component: SingleDashboardComponent;
  let fixture: ComponentFixture<SingleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
