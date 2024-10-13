import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sinup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sinup.component.html',
  styleUrl: './sinup.component.css'
})
export class SinupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private _ToastrService:ToastrService) {
    this.signupForm = this.fb.group({
      name: ['',[ Validators.required ,Validators.pattern(/^[A-Z][a-z]/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      rePassword: ['', [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      phone: ['',[ Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    },{ validators:this.RePassword});
  }
  RePassword(signupForm: any) { 
    const password = signupForm.get('password');
    const rePassword = signupForm.get('rePassword');

    if (password?.value === rePassword?.value) {
      return null; 
    } else {
      rePassword?.setErrors({Passwordmatch:' Repassword dont matches Password' })
      return {
        
        Passwordmatch: 'Re-entered password does not match the password'
      } 
    }
  }

  onSubmit( signupForm:FormGroup) {
    if (signupForm.valid) {
      this.authService.signup(signupForm.value).subscribe({
        next: (response) => {
          this._ToastrService.success("Signup successful");
          console.log('Signup successful', response);
        },
        error: (err) => {
          this._ToastrService.error(err.message || 'Signup error');
          console.error('Signup error', err);
        }
      })
    }
  }}

