import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { Cart, Product, prouductDetails } from '../../Module/cart';
import { CartService } from '../../Service/cart.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,LoaderComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , 
    private _ProductService:ProductService,private _CartService:CartService,private _ToastrService:ToastrService){}
  productDetails:prouductDetails|any;
  productId:any;
  data:any;
  isLoading: boolean = false;
  userToken:string|any=localStorage.getItem('userToken')
  isloadcart:boolean=false
  ngOnInit(): void {
    if(this.userToken!==null){
      this.isloadcart=false;
       }
       else{
        this.isloadcart=true;
       }
    this._ActivatedRoute.paramMap.subscribe((params)=>{
    
      this.productId=params.get('id')
    });
    this._ProductService.getproductDetails(this.productId).subscribe({
      next:(res)=>{
        this. isLoading = true;
        this.productDetails=res
        
      }
    })

  }
  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(res)=> {
          this._CartService.setcartNumber.next(res.numOfCartItems);
this._ToastrService.success('"Excellent choice! Add it to your cart now')
   
      }
      ,error:(err)=>{
this._ToastrService.error(err.error.message) 
      }
    })
  }

}
