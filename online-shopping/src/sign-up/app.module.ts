import { NgModule } from "@angular/core";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root.component';
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import routes from "./app.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [SignUpComponent,ForgetComponent, LoginComponent, RootComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        NgbModule,
        BrowserAnimationsModule
    ],
    bootstrap: [RootComponent]
})
export default class AppModule { }