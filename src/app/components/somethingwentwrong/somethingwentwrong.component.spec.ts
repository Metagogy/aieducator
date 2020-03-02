import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingwentwrongComponent } from './somethingwentwrong.component';

describe('SomethingwentwrongComponent', () => {
  let component: SomethingwentwrongComponent;
  let fixture: ComponentFixture<SomethingwentwrongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingwentwrongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingwentwrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
