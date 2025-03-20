import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 loginForm: FormGroup;
   private headderrrrrrrr = { headers : new HttpHeaders({})};
   errorMessage: string = '';
 url: any = 'http://localhost:8081/admin/login';
   constructor(private fb: FormBuilder,private httpclient: HttpClient) {
     this.loginForm = this.fb.group({
       email: ['', [Validators.required, Validators.minLength(3)]],
       password: ['', [Validators.required]]
     });
   }
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }
   public getList() {
     return this.httpclient.get<any>(this.url);
   }
   onSubmit() {
     // if (this.loginForm.valid) {
       this.getList().subscribe(data =>{
         // alert(data);
         console.log(data," it is successful")
       })
     // } else {
     //   this.errorMessage = 'Please fill out the form correctly.';
     // }
   }
 }

