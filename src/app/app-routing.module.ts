import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UserdashComponent } from './userdash/userdash.component';
import { NewcomplaintComponent } from './newcomplaint/newcomplaint.component';
import { TrackcomplaintComponent } from './trackcomplaint/trackcomplaint.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'usernavbar', component: UsernavbarComponent},
  { path: 'userdash', component: UserdashComponent},
  { path: 'newcomplaint', component: NewcomplaintComponent},
  { path: 'trackcomplaint', component: TrackcomplaintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }