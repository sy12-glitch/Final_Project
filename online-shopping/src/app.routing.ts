import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { CartComponent } from "./cart/cart.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { Product1Component } from "./product1/product1.component";
import { Product2Component } from "./product2/product2.component";
import { Product3Component } from "./product3/product3.component";
import { ForgetComponent } from "./sign-up/forget/forget.component";
import { LoginComponent } from "./sign-up/login/login.component";

import { SignUpComponent } from "./sign-up/sign-up/sign-up.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { ProductCreateComponent } from "./admin/add-product/add-product.component";
import { ListProductComponent } from "./admin/list-product/list-product.component";
import { ControllerComponent } from "./admin/controller/controller.component";

const routes:Routes = [
    { path: 'sign-up', component: SignUpComponent },
    {path:"",component:HomePageComponent},
   // { path: '', redirectTo: '/sign-up/sign-up', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'product1', component: Product1Component },
    { path: 'product2', component: Product2Component },
    { path: 'product3', component: Product3Component },
    { path: 'cart', component: CartComponent },
    { path: 'home-page', component: HomePageComponent},
    { path: 'admin-login', component: AdminLoginComponent},
    { path: 'order', component: MyOrdersComponent },
    {path: 'create', component: ProductCreateComponent},
    {path: 'list', component: ListProductComponent},
    {path:'add-product', component: ProductCreateComponent},
    {path:'list-product', component: ListProductComponent},
 
   

   
   
];

export default routes;
