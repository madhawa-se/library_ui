import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subscription: any;
  user: User;

  constructor(public authService: AuthService,private router:Router) {

  }

  ngOnInit(): void {
    this.userChangeListner();
  }

  userChangeListner(){
    this.subscription = this.authService.userSubject.subscribe(user=>{
      this.user = user;
      console.log("user lstner called",user);
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
