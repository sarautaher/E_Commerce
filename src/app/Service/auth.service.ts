import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDate=new BehaviorSubject( null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('userToken')!==null){
      this.decodeUserDate();
    }
  }
  decodeUserDate(){
    let encodeUser=JSON.stringify(localStorage.getItem('userToken'));
    let decode:any=jwtDecode(encodeUser);
    this.userDate.next(decode);
  }
 
  logOut(){
    localStorage.removeItem("userToken")
    this.userDate.next(null);
    this._Router.navigate(['/login']);
  }

  signup(userData: any): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }

  login(userData: any): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData);
  }
  ForgetPassword(user:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',user)
  }
  verifyPassword(user:object):Observable<any>{
    console.log(user)
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',user)
  }
  ResetPassword(user:object):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,user)
  }
}
