import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandtopicComponent } from './testandtopic.component';

describe('TestandtopicComponent', () => {
  let component: TestandtopicComponent;
  let fixture: ComponentFixture<TestandtopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestandtopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestandtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
