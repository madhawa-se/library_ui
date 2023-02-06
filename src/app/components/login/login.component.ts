import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.switchPanels();
  }

  onSubmit() {

    if (!this.loginForm.invalid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res) => {
        console.log(res);
        Swal.fire({
          title: 'Success!',
          text: 'The request was successful',
          icon: 'success'
        });
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'The request was unsuccessful',
          icon: 'error'
        });
      });
    }

  }

  
  onSubmitSignup() {

    if (!this.signupForm.invalid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value).subscribe((res) => {
        console.log(res);
        Swal.fire({
          title: 'Success!',
          text: 'The request was successful',
          icon: 'success'
        });
      }, error => {
        Swal.fire({
          title: 'Error!',
          text: 'The request was unsuccessful',
          icon: 'error'
        });
      });
    }

  }

  switchPanels(){
    
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    });
    

  }
}
