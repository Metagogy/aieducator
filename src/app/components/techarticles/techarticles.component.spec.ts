import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecharticlesComponent } from './techarticles.component';

describe('TecharticlesComponent', () => {
  let component: TecharticlesComponent;
  let fixture: ComponentFixture<TecharticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecharticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecharticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
