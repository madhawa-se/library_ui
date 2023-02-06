import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CourseComponent } from './components/course/course.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TuteComponent } from './components/tute/tute.component';
import { AttendanceCardComponent } from './components/attendance-card/attendance-card.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { MCQComponent } from './components/mcq/mcq.component';
import { McqCreateComponent } from './components/mcq-create/mcq-create.component';
import { McqCreateCardComponent } from './components/mcq-create-card/mcq-create-card.component';
import { ClassesComponent } from './components/classes/classes.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { McqHistoryComponent } from './components/mcq-history/mcq-history.component';
import { ResultsComponent } from './components/results/results.component';
import { AssignmentCardComponent } from './components/assignment-card/assignment-card.component';
import { StreamsCardComponent } from './components/streams-card/streams-card.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { ManageClassesComponent } from './components/manage-classes/manage-classes.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { MarkAssignmentComponent } from './components/mark-assignment/mark-assignment.component';
import { ComponentsComponent } from './components/components.component';
import { PaymentManagementComponent } from './components/payment-management/payment-management.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { AddBookComponent } from './components/models/add-book/add-book.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AutherComponent } from './components/auther/auther.component';
import { AddAuthorComponent } from './components/models/add-author/add-author.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AttendanceComponent,
    CourseComponent,
    TuteComponent,
    AssignmentCardComponent,
    AttendanceCardComponent,
    QuestionCardComponent,
    MCQComponent,
    McqCreateComponent,
    McqCreateCardComponent,
    ClassesComponent,
    BookSearchComponent,
    BookCardComponent,
    McqHistoryComponent,
    ResultsComponent,
    StreamsCardComponent,
    AssignmentComponent,
    CreateClassComponent,
    ManageClassesComponent,
    AllUsersComponent,
    AllBooksComponent,
    MarkAssignmentComponent,
    ComponentsComponent,
    PaymentManagementComponent,
    SidebarComponent,
    AddBookComponent,
    AutherComponent,
    AddAuthorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxChartsModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
