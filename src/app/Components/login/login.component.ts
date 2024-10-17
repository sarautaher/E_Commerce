
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoad:boolean=false

  constructor(private fb: FormBuilder, private authService: AuthService,private _ToastrService:ToastrService,private _Router:Router
    ,private _AuthService:AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
       next:(resposne) => {
          if (resposne.message==='success'){
          this.isLoad=true;
localStorage.setItem("userToken",resposne.token)
this._AuthService.decodeUserDate()
          this._ToastrService.success('Hello and welcome! Enjoy your shopping experience')
          this._Router.navigate(['/home'])
        }},
       error: (error) => {
          this._ToastrService.error(error.error.message )
          console.error('Login error', error);
        },
      })
    }
}}
