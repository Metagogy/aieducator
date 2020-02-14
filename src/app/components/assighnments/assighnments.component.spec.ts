import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssighnmentsComponent } from './assighnments.component';

describe('AssighnmentsComponent', () => {
  let component: AssighnmentsComponent;
  let fixture: ComponentFixture<AssighnmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssighnmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssighnmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
