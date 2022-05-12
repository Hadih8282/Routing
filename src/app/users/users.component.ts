import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  users!: IUser[] ;

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
