import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  onSubmit(){
    console.log(this.loginForm)  
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)

      this.router.navigate(['/home'])
    }
  }

}
