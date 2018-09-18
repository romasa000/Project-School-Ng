import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructorComponent } from './course-instructor.component';

describe('CourseInstructorComponent', () => {
  let component: CourseInstructorComponent;
  let fixture: ComponentFixture<CourseInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
