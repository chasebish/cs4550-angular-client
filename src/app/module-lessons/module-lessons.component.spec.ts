import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLessonsComponent } from './module-lessons.component';

describe('ModuleLessonsComponent', () => {
  let component: ModuleLessonsComponent;
  let fixture: ComponentFixture<ModuleLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
