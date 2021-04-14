import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "src/home-page/home-page.component";
import { ForgetComponent } from "./sign-up/forget/forget.component";
import { LoginComponent } from "./sign-up/login/login.component";

import { SignUpComponent } from "./sign-up/sign-up/sign-up.component";

const routes:Routes = [
    {path: 'sign-up',component:SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'reset-password', component:ForgetComponent},
    {path: '**', pathMatch: 'full', redirectTo: "home-page" }
];

export default routes;
