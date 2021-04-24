import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { Product1Component } from "./product1/product1.component";
import { Product2Component } from "./product2/product2.component";
import { Product3Component } from "./product3/product3.component";
import { LoginComponent } from "./sign-up/login/login.component";
import { ProductComponent } from "./product/product.component";
import { SignUpComponent } from "./sign-up/sign-up/sign-up.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { ProductCreateComponent } from "./admin/add-product/add-product.component";
import { ListProductComponent } from "./admin/list-product/list-product.component";
import { ControllerComponent } from "./admin/controller/controller.component";
import { UserDetailsComponent } from "./admin/user-details/user-details.component";
import {Cart2Component} from "./cart2/cart2.component";
import { EditProductComponent } from "./admin/edit-product/edit-product.component";
import { InvoiceComponent } from "./app/invoice/invoice.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AdminGuard } from "./guard/admin.guard";


const routes:Routes = [
    { path: 'sign-up', component: SignUpComponent },
    {path: '', component: HomePageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'product1', component: Product1Component },
    { path: 'product2', component: Product2Component },
    { path: 'product3', component: Product3Component },
    { path: 'home-page', component: HomePageComponent},
    { path: 'admin-login', component: AdminLoginComponent},
    { path: 'order', component: MyOrdersComponent },
    // {path: 'create', component: ProductCreateComponent, canActivate: [AdminGuard]},
    {path: 'list', component: ListProductComponent},
    {path:'add-product', component: ProductCreateComponent, canActivate: [AdminGuard]},
    {path: 'edit/:id', component: EditProductComponent},
    {path:'controller', component: ControllerComponent},
    {path:'list-product', component: ListProductComponent},
    {path:'user-det', component: UserDetailsComponent},
    {path:'product', component: ProductComponent},
    {path:'cart2', component: Cart2Component},
    {path:'invoice', component:InvoiceComponent}
   
 
   

   
   
];

export default routes;
