import { CartService } from './../../Service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { Cart, Product } from '../../Module/cart';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipe/search.pipe';
import { ToastrService } from 'ngx-toastr';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, SearchPipe,LoaderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products:Product|any;
  cart:Cart|any
  term:string = '';
  isLoading: boolean = false;
  searchedItem: string = ''
   userToken:string|any=localStorage.getItem('userToken')
   isloadcart:boolean=false

constructor(private _productservice:ProductService,private _CartService:CartService,private _ToastrService:ToastrService){}
ngOnInit(): void {
  if(this.userToken!==null){
  this.isloadcart=false;
   }
   else{
    this.isloadcart=true;
   }
  this._productservice.getproducts().subscribe({
    next:(res)=>{
      this. isLoading = true;
       this.products=res
      
      console.log(res)
    }
  })
}
addToCart(productId:string){
  this._CartService.addToCart(productId).subscribe({
    next:(res)=> {
       this._CartService.setcartNumber.next(res.numOfCartItems);
       this._ToastrService.success('"Excellent choice! Add it to your cart now')
      },error:(err)=>{
this._ToastrService.error(err.error.message) 
    }
  })
}
}
