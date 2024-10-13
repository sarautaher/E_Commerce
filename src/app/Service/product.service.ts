import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, prouductDetails } from '../Module/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  getproducts():Observable<Product[]>{
    return this._HttpClient.get<Product[]>('https://ecommerce.routemisr.com/api/v1/products')
  }
  getproductDetails(id:string):Observable<prouductDetails>{
    return this._HttpClient.get<prouductDetails>(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
 
}
