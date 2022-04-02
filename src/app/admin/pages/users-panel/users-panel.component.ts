import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/UsersApiResponse';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      ({usersFound}) => {
        this.users= usersFound;
      }
    );
  }

  modificar(user: User){
    console.log(user);
  }

  borrar(user: User){
    console.log(user);
  }

}
