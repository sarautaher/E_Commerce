import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../Module/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  setcartNumber=new BehaviorSubject(0);
  header:any={token:localStorage.getItem('userToken')};
  constructor(private _HttpClient:HttpClient) { }
  
  addToCart(productId:string):Observable<Cart>{
     return this._HttpClient.post<Cart>('https://ecommerce.routemisr.com/api/v1/cart',{productId:productId},{headers:this.header})

  }
  getCart():Observable<Cart>{
    return this._HttpClient.get<Cart>("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:this.header
    })
  }
  DeleteCart(productId:string):Observable<Cart>{
    return this._HttpClient.delete<Cart>(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
          headers:this.header
        })  
  }
  UpdateCart(productId:string,count:number):Observable<Cart>{
    return this._HttpClient.put<Cart>(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:count},{
      headers:this.header
    })  
  }
  Checkout(shippingAddress:any,productId:number):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=http://localhost:4200`,
  {shippingAddress:shippingAddress} ,{
    headers:this.header
  } 
)
  }
}
