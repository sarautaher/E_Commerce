import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../Service/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  isLoad:boolean=false
constructor( private _AuthService:AuthService,private _ToastrService:ToastrService ,private _Router:Router){

}
user:FormGroup=new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null ,[Validators.required ,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
})
Reset(user:FormGroup){
this._AuthService.ResetPassword(user.value).subscribe({
  next:(res)=>{
    this.isLoad=true
    if(res.token ){
      this._ToastrService.success("Tahe")
      setTimeout(() => {
        this._Router.navigate(['/login']);
      },200);
  }
},error:(err)=>{
this._ToastrService.error(err)
}})
}
}
