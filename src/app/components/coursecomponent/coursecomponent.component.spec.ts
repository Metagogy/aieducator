import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecomponentComponent } from './coursecomponent.component';

describe('CoursecomponentComponent', () => {
  let component: CoursecomponentComponent;
  let fixture: ComponentFixture<CoursecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
