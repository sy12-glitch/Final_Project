import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "src/home-page/home-page.component";
import { ForgetComponent } from "./forget/forget.component";

import { SignUpComponent } from "./sign-up/sign-up.component";

const routes:Routes = [
    {path:''}
    {path: 'create', component: SignUpComponent},
    {path: 'edit/:id', component: ForgetComponent},
   
    // {path: './list', component: HomePageComponent},
    {path: '**', pathMatch: 'full', redirectTo: "sign-up" }
];


export default routes;
