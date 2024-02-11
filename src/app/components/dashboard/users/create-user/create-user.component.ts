import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../interfaces/user";
import {UserService} from "../../../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent implements OnInit{
  sex: any[] = [
    {value: 'Masculine', viewValue: 'Masculine'},
    {value: 'Feminine', viewValue: 'Feminine'}
  ];

  form: FormGroup;

    constructor(private fb: FormBuilder,
                private _userService: UserService,
                private router: Router,
                private _snackBar: MatSnackBar) {
      this.form = this.fb.group({
        user: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        sex: ['', Validators.required],
      })
    }
    ngOnInit(): void {
    }

    addUser(){
      console.log(this.form.value);
      const user: User = {
        user: this.form.value.user,
        name: this.form.value.name,
        lastname: this.form.value.lastname,
        sex: this.form.value.sex,
      }

      this._userService.addUser(user);
      this.router.navigate(['/dashboard/users']);

      this._snackBar.open('User added successfully !!!','',{
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
  }

}
