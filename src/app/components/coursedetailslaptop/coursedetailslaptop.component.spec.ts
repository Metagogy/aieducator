import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailslaptopComponent } from './coursedetailslaptop.component';

describe('CoursedetailslaptopComponent', () => {
  let component: CoursedetailslaptopComponent;
  let fixture: ComponentFixture<CoursedetailslaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedetailslaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailslaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
