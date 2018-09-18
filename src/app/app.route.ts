import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { DepartmentComponent } from './components/department/department.component';
import { PersonComponent } from './components/person/person.component';
import { StudentGradeComponent } from './components/student-grade/student-grade.component';
import { OfficeAssignmentComponent } from './components/office-assignment/office-assignment.component';
import { OnlineCourseComponent } from './components/online-course/online-course.component';
import { OutsideCourseComponent } from './components/outside-course/outside-course.component';
import { CourseInstructorComponent } from './components/course-instructor/course-instructor.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'user', component: UserComponent},
    {path: 'department', component: DepartmentComponent},
    {path: 'person', component: PersonComponent},
    {path: 'student-grade', component: StudentGradeComponent},
    {path: 'office-assignment', component: OfficeAssignmentComponent},
    {path: 'online-course', component: OnlineCourseComponent},
    {path: 'outside-course', component: OutsideCourseComponent},
    {path: 'course-instructor', component: CourseInstructorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
