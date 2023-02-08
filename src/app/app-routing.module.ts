import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AutherComponent } from './components/auther/auther.component';
import { BookLendComponent } from './components/book-lend/book-lend.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BorrowedComponent } from './components/borrowed/borrowed.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentManagementComponent } from './components/payment-management/payment-management.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [


  { path: 'book-search', component: BookSearchComponent },
  {
    path: 'author', component: AutherComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category', component: CategoryComponent, canActivate: [AuthGuard]
  },
  {
    path: 'lend', component: BookLendComponent, canActivate: [AuthGuard]
  },

  {
    path: 'borrow', component: BorrowedComponent, canActivate: [AuthGuard]
  },

  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  //////////////////////////////////////////////////

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'payment-management', component: PaymentManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
