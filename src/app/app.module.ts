import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UserdashComponent } from './userdash/userdash.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { NewcomplaintComponent } from './newcomplaint/newcomplaint.component';
import { TrackcomplaintComponent } from './trackcomplaint/trackcomplaint.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactComponent,
    ForgotPasswordComponent,
    UsernavbarComponent,
    UserdashComponent,
    NewcomplaintComponent,
    TrackcomplaintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
