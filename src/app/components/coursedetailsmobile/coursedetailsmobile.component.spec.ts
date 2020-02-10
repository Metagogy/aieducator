import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailsmobileComponent } from './coursedetailsmobile.component';

describe('CoursedetailsmobileComponent', () => {
  let component: CoursedetailsmobileComponent;
  let fixture: ComponentFixture<CoursedetailsmobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailsmobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailsmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
