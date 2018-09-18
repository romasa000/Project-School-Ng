import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAssignmentComponent } from './office-assignment.component';

describe('OfficeAssignmentComponent', () => {
  let component: OfficeAssignmentComponent;
  let fixture: ComponentFixture<OfficeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
