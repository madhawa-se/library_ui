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
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
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
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/models/add-category/add-category.component';
import { BookLendComponent } from './components/book-lend/book-lend.component';
import { BorrowedComponent } from './components/borrowed/borrowed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserSelectComponent } from './components/models/user-select/user-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BookSearchComponent,
    BookCardComponent,
    AllUsersComponent,
    AllBooksComponent,
    ComponentsComponent,
    PaymentManagementComponent,
    SidebarComponent,
    AddBookComponent,
    AutherComponent,
    AddAuthorComponent,
    CategoryComponent,
    AddCategoryComponent,
    BookLendComponent,
    BorrowedComponent,
    ProfileComponent,
    UserSelectComponent
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
