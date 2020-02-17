import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopiccomponentComponent } from './topiccomponent.component';

describe('TopiccomponentComponent', () => {
  let component: TopiccomponentComponent;
  let fixture: ComponentFixture<TopiccomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopiccomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopiccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
