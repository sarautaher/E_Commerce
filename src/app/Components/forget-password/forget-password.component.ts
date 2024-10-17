import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './../../Service/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  isLoad:boolean=false;
constructor(private _AuthService:AuthService,private _ToastrService:ToastrService,private _Router:Router){

}
user:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
});
userCode:FormGroup=new FormGroup({
resetCode:new FormControl(null,[Validators.required])
})

ForgetPassword(user:FormGroup){
this._AuthService.ForgetPassword(user.value).subscribe({
  next:(res)=>{
    this.isLoad=true
    if(res.statusMsg=== 'success'){
      this._ToastrService.success("open your E_mail");
      document.getElementById('ForgetPassword')?.classList.add('d-none')
      document.getElementById('VerifyPassword')?.classList.remove('d-none')
      this.isLoad=false
    }
  }, error: (err) => {
    this._ToastrService.error(err.error.message || 'Signup error');
  
  }
})
}
VerifyPassword(user:FormGroup){
  this.isLoad=false
  this._AuthService.verifyPassword(user.value).subscribe({
    next:(res)=>{
      this.isLoad=true
      if(res.status ==="Success"){
        this._ToastrService.success("open your E_mail")
        this._Router.navigate(['/ResetPassword'])
      }
    }, error: (err) => {
      this._ToastrService.error(err.error.message || 'Signup error');
    
    }
  })
}
}
