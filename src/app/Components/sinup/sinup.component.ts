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

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required ,Validators.pattern(/^[A-Z][a-z]/)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]],
      rePassword: ['', Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)],
      phone: ['', Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)],
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

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(
        (response) => {
          console.log('Signup successful', response);
        },
        (error) => {
          console.error('Signup error', error);
        },
      );
    }
  }
}
