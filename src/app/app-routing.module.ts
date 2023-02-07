import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AutherComponent } from './components/auther/auther.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { CategoryComponent } from './components/category/category.component';
import { ClassesComponent } from './components/classes/classes.component';
import { CourseComponent } from './components/course/course.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { LoginComponent } from './components/login/login.component';
import { ManageClassesComponent } from './components/manage-classes/manage-classes.component';
import { MarkAssignmentComponent } from './components/mark-assignment/mark-assignment.component';
import { McqCreateComponent } from './components/mcq-create/mcq-create.component';
import { McqHistoryComponent } from './components/mcq-history/mcq-history.component';
import { MCQComponent } from './components/mcq/mcq.component';
import { PaymentManagementComponent } from './components/payment-management/payment-management.component';
import { ResultsComponent } from './components/results/results.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [


  { path: 'book-search', component: BookSearchComponent },
  {
    path: 'author', component: AutherComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category', component: CategoryComponent, canActivate: [AuthGuard]
  },
  //////////////////////////////////////////////////

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'course', component: CourseComponent },
  { path: 'mcq', component: MCQComponent },
  { path: 'mcq-create', component: McqCreateComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'mcq-history', component: McqHistoryComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'assignment', component: AssignmentComponent },
  { path: 'create-class', component: CreateClassComponent },
  { path: 'manage-classes', component: ManageClassesComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'mark-assignment', component: MarkAssignmentComponent },
  { path: 'payment-management', component: PaymentManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
