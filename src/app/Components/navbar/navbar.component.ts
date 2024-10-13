import { AuthService } from './../../Service/auth.service';
import { CartService } from './../../Service/cart.service';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cartId:number|any
  userToken:any=localStorage.getItem('userToken')
  isload:boolean=false
  constructor(private _CartService:CartService,private _AuthService:AuthService){
  _AuthService.userDate.subscribe({
    next:()=>{
    if (_AuthService.userDate.getValue()!==null) {
      this.isload=false;
    }
    else{
      this.isload=true;
    }}})

  }
ngOnInit(): void {
  this._CartService.getCart().subscribe({
    next:(res)=>{
  this._CartService.setcartNumber.next(res.numOfCartItems)

    },error:(err)=>{console.log(err)}
  })
  
this._CartService.setcartNumber.subscribe({
    next:(CartId)=>{
      this.cartId=CartId
    }
  })
}

logOut(){
  this._AuthService.logOut()
}
}
