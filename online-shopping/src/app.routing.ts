import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "src/home-page/home-page.component";
import { ForgetComponent } from "./sign-up/forget/forget.component";

import { SignUpComponent } from "./sign-up/sign-up/sign-up.component";

const routes:Routes = [
    {path: 'SignUp/Login', loadChildren:()=> import('./sign-up/sign-up/sign-up.component').then(m=>m.SignUpComponent)},
    {path: 'edit/:id', component: ForgetComponent},
    {path: '**', pathMatch: 'full', redirectTo: "home-page" }
];


export default routes;
