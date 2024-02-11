import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../interfaces/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit{
  listUsers: User[] = [];

  displayedColumns: string[] = ['user', 'name', 'lastname', 'sex', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService: UserService, private _snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(){
    this.listUsers = this._userService.getUser();
    this.dataSource = new MatTableDataSource(this.listUsers);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index: number){
    console.log(index);
    this._userService.deleteUser(index);
    this.cargarUser();

    this._snackBar.open('User delete successfully','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
