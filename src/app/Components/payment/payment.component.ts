import { ActivatedRoute } from '@angular/router';
import { CartService } from './../../Service/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  CartId:number|any=null;
  isLoad:boolean=false
  constructor(private _CartService:CartService, private _ActivatedRoute:ActivatedRoute,private _ToastrService:ToastrService){

  }
ngOnInit(): void {
 this._ActivatedRoute.paramMap.subscribe({
  next:(param)=>{
this.CartId=param.get('cartId')
  },error:(err)=>{console.log(err)}
 })   
}
User:FormGroup=new FormGroup({
  details:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required]),
})
CheckoutPayment(){
  this._CartService.Checkout(this.User.value,this.CartId).subscribe({
    next:(res)=>{
      this.isLoad=true
      console.log(res)
      if (res.status == "success" ) {
        this._ToastrService.success(res.status)
        window.open(res.session.url);
      }
    },error:(err)=>{
      this._ToastrService.error(err.error.message)
    }
  })
}

}
