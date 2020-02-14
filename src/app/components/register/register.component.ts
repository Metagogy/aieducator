import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../static/assets/css/theme.css', '../../static/assets/css/style1.css', '../../static/assets/fonts/Inter-UI.var.woff2', '../../static/assets/fonts/Inter-UI-upright.var.woff2']
})
export class RegisterComponent implements OnInit {

  loading = false;
    submitted = false;
    userData;

  constructor(private auth: AuthenticationServiceService,private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    
  }

  register(regform) {
    this.userData = {
      username : regform.value.username,
      email : regform.value.email,
      password : regform.value.password
    }
    // alert('Your Username :' + regform.value.username + '\n Password is :' + regform.value.password);
    console.log(regform.value.email);  // { first: '', last: '' }
    console.log(regform.valid);  // false
    // localStorage.setItem('Username' , form.value.email);
    // localStorage.setItem('Password' , form.value.password);
    this.auth.register(this.userData)
            .pipe(first())
            .subscribe(
                data => {
                    alert('Registration successful');
                    this.router.navigate(['/login']);
                },
                error => {
                    alert(" error :"+error.message);
                    this.loading = false;
                });
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  checkPassword(regform){
    if(regform.value.password != regform.value.confirmPassword){
      console.log('Password dose not match');
    }    
  }

  mustMatch(controlName, matchingControlName) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
      }
    }

}
