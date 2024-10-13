import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Cart } from '../../Module/cart';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,LoaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart:Cart|null=null;
  isLoading:boolean=false;
constructor(private _CartService:CartService,private _ToastrService: ToastrService){

}
ngOnInit(): void {
this.getCart()   
}
getCart(){
this._CartService.getCart().subscribe({
  next:(res)=>{
this.isLoading=true
this._CartService.setcartNumber.next(res.numOfCartItems)
this.cart=res
  },error:(err)=>{console.log(err)}
})
}
DeleteCart(productId:string){
this._CartService.DeleteCart(productId).subscribe({
  next:(res)=>{
    this.cart=res
    this._ToastrService.warning("Sure to Delete !")
},
  error:(err)=>{

  }
})
}
Updatacart(productId:string,count:number){
  this._CartService.UpdateCart(productId,count).subscribe({
    next:(res)=>{
      if(count==0){
        this.DeleteCart(productId)
      }
      else{
        this.cart=res
        this._ToastrService.success("success at cart!")
      }
    }
    ,error:(err)=>{

    }
  })
}
}
