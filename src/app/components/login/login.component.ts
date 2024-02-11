import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit() {
  }

  ingresar() {
    const user = this.form.value.user;
    const password = this.form.value.password;
    if (user == 'Jordan' && password == '123') {
      this.fakeLoading();
    } else {
      this.error();
      this.form.reset();
    }
  }

    error(){
      this._snackBar.open('User and Password are invalids','',{
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }

    fakeLoading(){
      this.loading = true;
      setTimeout(() =>{
        this.router.navigate(['dashboard']);
      }, 1500)
    }
  }
