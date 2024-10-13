import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { authGuard } from './Guard/auth.guard';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { LoginComponent } from './Components/login/login.component';
import { SinupComponent } from './Components/sinup/sinup.component';

export const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent ,title:'Home'},
    {path:'cart',component:CartComponent,title:"Cart" ,canActivate:[authGuard]},
    {path:"payment/:cartId",component:PaymentComponent,title:"payment",canActivate:[authGuard]},
    {path:"Product",component:ProductComponent,title:"Product",canActivate:[authGuard]},
    {path:'productdetails/:id',component:ProductdetailsComponent,title:"productdetails"},
    {path:'allorders',component:AllOrdersComponent,title:"Allorders",canActivate:[authGuard]},
    {path:'login',component:LoginComponent ,title:"login"},
    {path:"sinup",component:SinupComponent,title:'sinup'},
    {path:'ResetPassword',component:ResetPasswordComponent,title:"ResetPassword"},
    {path:"ForgetPassword",component:ForgetPasswordComponent,title:"ForgetPassword "},
    {path:'**',component:NotFoundComponent,title:'NotFound'}
];
