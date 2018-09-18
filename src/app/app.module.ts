import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.route';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { OnlineCourseComponent } from './components/online-course/online-course.component';
import { OutsideCourseComponent } from './components/outside-course/outside-course.component';
import { StudentGradeComponent } from './components/student-grade/student-grade.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentComponent } from './components/department/department.component';
import { OfficeAssignmentComponent } from './components/office-assignment/office-assignment.component';
import { CourseInstructorComponent } from './components/course-instructor/course-instructor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    OnlineCourseComponent,
    OutsideCourseComponent,
    StudentGradeComponent,
    UserComponent,
    HomeComponent,
    DepartmentComponent,
    OfficeAssignmentComponent,
    CourseInstructorComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
