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
import { Product1Component } from './product1/product1.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
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




@NgModule({
  declarations: [SignUpComponent,ForgetComponent, LoginComponent,
    AppComponent,
    HomePageComponent,
    Product1Component,
    MyOrdersComponent,
    Product2Component,
 
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

