import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqsectionComponent } from './mcqsection.component';

describe('McqsectionComponent', () => {
  let component: McqsectionComponent;
  let fixture: ComponentFixture<McqsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
