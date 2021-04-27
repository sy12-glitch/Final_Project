import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LogoutComponent} from "./logout/logout.component";
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
import { ManageCategoryComponent } from "./admin/manage-category/manage-category.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AdminGuard } from "./guard/admin.guard";
import { ProfileComponent } from "./profile/profile.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { LoginGuard } from "./guard/login.guard";
import { LoggedinGuard } from "./guard/loggedin.guard";
import { Header2Component } from "./shared/header2/header2.component";


const routes:Routes = [
    { path: 'sign-up', component: SignUpComponent, canActivate: [LoggedinGuard]},
    {path: '', component: HomePageComponent},
    { path: 'login', component: LoginComponent, canActivate: [LoggedinGuard]},
    { path: 'about-us', component: AboutUsComponent},
    { path: 'home-page', component: HomePageComponent},
    { path: 'admin-login', component: AdminLoginComponent},
    {path: 'logout', component: LogoutComponent, canActivate: [LoginGuard]}, 
    {path: 'create', component: ProductCreateComponent},
    {path: 'list', component: ListProductComponent},
    //  {path:'add-product', component: ProductCreateComponent, canActivate: [AdminGuard]},
     {path:'add-product', component: ProductCreateComponent,},
    {path: 'edit/:id', component: EditProductComponent},
    {path:'controller', component: ControllerComponent, canActivate: [AdminGuard]},
    {path:'list-product', component: ListProductComponent},
    {path:'user-det', component: UserDetailsComponent, canActivate: [LoginGuard]}, 
    {path:'product', component: ProductComponent},
    {path:'cart2', component: Cart2Component, canActivate: [LoginGuard]}, 
    {path:'invoice', component:InvoiceComponent, canActivate: [LoginGuard]}, 
    {path:'manage-cat', component:ManageCategoryComponent},
    {path:'profile', component:ProfileComponent, canActivate: [LoginGuard]}, 
    {path:'my-order',component:MyOrderComponent, canActivate: [LoginGuard]}
   

   
   
];

export default routes;