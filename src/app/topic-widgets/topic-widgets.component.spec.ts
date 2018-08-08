import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicWidgetsComponent } from './topic-widgets.component';

describe('TopicWidgetsComponent', () => {
  let component: TopicWidgetsComponent;
  let fixture: ComponentFixture<TopicWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
