export class Product {
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
    constructor(  data:prouductDetails[], sold: number,images: string[],  subcategory: Brand[], ratingsQuantity:     number,
        _id:  string ,title:string, slug: string,description: string,quantity:  number,
        price:number,imageCover: string, category: Brand, brand:Brand, ratingsAverage:number,
        createdAt: Date,  updatedAt: Date,id:   string,priceAfterDiscount?: number,
        availableColors?:    any[]){
 this. data=data;
 this. sold=sold  ;
 this. images=images;
 this. subcategory=subcategory    
this.ratingsQuantity=  ratingsQuantity
this._id=  _id
 this. title=title
  this.slug=slug
 this. description  =description 
this.quantity=  quantity           
   this.price=         price              
   this.imageCover=         imageCover    
     this.category=       category      
     this.brand=       brand         
    this.ratingsAverage=        ratingsAverage     
      this.createdAt=      createdAt        
          this.updatedAt=  updatedAt          
       this.id=     id            
         this.priceAfterDiscount=   priceAfterDiscount
        this.availableColors=    availableColors 
    }
}
export class Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
    constructor( _id: string,name: string,slug: string, image: string){
this._id=_id;
this.name=name;
this.image=image;
this.slug=slug
    }
  
  }
  export class Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
    constructor( _id: string,name: string,slug: string, image: string){
this._id=_id;
this.name=name;
this.image=image;
this.slug=slug
    }
  }
  export class prouductDetails{
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
reviews:any[]
slug: string
sold: number
title: string
updatedAt:Date
__v:number 
_id:number
constructor( brand: Brand[], category: Category[],createdAt: Date,description: string,id: number,imageCover: string, price:number,quantity: number, ratingsAverage:number
    ,ratingsQuantity:number, reviews:any[],slug: string,sold: number,title: string,updatedAt:Date,__v:number ,_id:number){
      this.brand=  brand;
      this.category=category;
      this.createdAt=createdAt;
      this.description=description;
      this.id=id;
      this.imageCover=imageCover;
      this.price=price;
      this.quantity=quantity;
      this.ratingsQuantity=ratingsQuantity;
      this.ratingsAverage=ratingsAverage;
      this.reviews=reviews;
      this.slug=slug;
      this.sold=sold;
      this.title=title;
      this.updatedAt=updatedAt;
      this.__v=__v;
      this._id=_id

}
  }


export class CartItem {
    count: number;
    price: number;
    product: Product;
    constructor(  count: number,price: number,product: Product,){
this.count=count;
this.price=price;
this.product=product
    }
  }
  export class CartData {
    cartOwner: string;
    createdAt: string;
    products: CartItem[];
    totalCartPrice: number;
    updatedAt: string;
    __v: number;
    _id: string;
    constructor( cartOwner: string,createdAt: string, products: CartItem[],
        totalCartPrice: number,updatedAt: string,__v: number, _id: string,){
            this.cartOwner=cartOwner;
            this.createdAt=createdAt;
            this.products=products;
            this.totalCartPrice=totalCartPrice;
            this.updatedAt=updatedAt;
            this.__v=__v;
            this._id=_id
        }
  }
  export class Cart {
    cartId: string;
    data: CartData;
    numOfCartItems: number;
    status: string;
    count:number
    constructor( cartId: string,data: CartData, numOfCartItems: number,status: string,count:number){
this.cartId=cartId;
this.data=data;
this.numOfCartItems=numOfCartItems;
this.status=status;
this.count=count
    }
  }
  

