export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
  
  }
  export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  export interface prouductDetails{
    brand: Brand[]
category: Category[]
createdAt: Date
description: string
id: number
imageCover: string
price:number
quantity: number
ratingsAverage:number
ratingsQuantity:number
reviews: []
slug: string
sold: number
title: string
updatedAt:Date
__v:number 
_id:number
  }
  export interface Product {
    data:prouductDetails[];
    sold:                number;
    images:              string[];
    subcategory:         Brand[];
    ratingsQuantity:     number;
    _id:                 string;
    title:               string;
    slug:                string;
    description:         string;
    quantity:            number;
    price:               number;
    imageCover:          string;
    category:            Brand;
    brand:               Brand;
    ratingsAverage:      number;
    createdAt:           Date;
    updatedAt:           Date;
    id:                  string;
    priceAfterDiscount?: number;
    availableColors?:    any[];
  }
  export interface CartItem {
    count: number;
    price: number;
    product: Product;
  }
  export interface CartData {
    cartOwner: string;
    createdAt: string;
    products: CartItem[];
    totalCartPrice: number;
    updatedAt: string;
    __v: number;
    _id: string;
  }
  export interface Cart {
    cartId: string;
    data: CartData;
    numOfCartItems: number;
    status: string;
  }
  