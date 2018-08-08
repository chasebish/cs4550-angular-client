import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTopicsComponent } from './lesson-topics.component';

describe('LessonTopicsComponent', () => {
  let component: LessonTopicsComponent;
  let fixture: ComponentFixture<LessonTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
