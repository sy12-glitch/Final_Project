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
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


@NgModule({
  declarations: [SignUpComponent,ForgetComponent, LoginComponent,
    AppComponent,
    HomePageComponent,
    Product1Component,
    CartComponent,
    MyOrdersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,ReactiveFormsModule,
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

