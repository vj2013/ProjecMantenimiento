import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    {user: 'pattyct95@correo.com', name: 'Patricia', lastname: 'Chafloque', sex: 'Feminine'},
    {user: 'xiomara@correo.com', name: 'Xiomara', lastname: 'Chafloque', sex: 'Feminine'},
    {user: 'juliette@correo.com', name: 'Juliette', lastname: 'Vicaña', sex: 'Feminine'},
    {user: 'jvicanaa@correo.com', name: 'Jordan', lastname: 'Vicaña', sex: 'Masculine'}
  ];

  constructor() { }

  getUser(){
    return this.listUsers.slice();
  }
  deleteUser(index: number){
    this.listUsers.splice(index, 1);
  }

  addUser(user: User){
    this.listUsers.unshift(user);
  }
}
