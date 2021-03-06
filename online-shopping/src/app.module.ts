import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from 'src/sign-up/sign-up/sign-up.component';
import { ForgetComponent } from 'src/sign-up/forget/forget.component';
import { LoginComponent } from 'src/sign-up/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import routes from 'src/app.routing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ProductComponent } from './product/product.component';
import { Header2Component } from './shared/header2/header2.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ProductCreateComponent } from './admin/add-product/add-product.component';
import { ControllerComponent } from './admin/controller/controller.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { Cart2Component } from './cart2/cart2.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { InvoiceComponent } from './app/invoice/invoice.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [SignUpComponent,ForgetComponent, LoginComponent,
    AppComponent,
    HomePageComponent,
    MyOrderComponent,
    HeaderComponent,
    Header2Component,
    FooterComponent,
    AdminLoginComponent,
    ProductCreateComponent,
    ListProductComponent,
    ProductComponent,
      ControllerComponent,
      UserDetailsComponent,
      Cart2Component,
      EditProductComponent,
      InvoiceComponent,
      ManageCategoryComponent,
      ProfileComponent,
      LogoutComponent,
     

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
}

