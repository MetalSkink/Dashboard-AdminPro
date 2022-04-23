import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/UsersApiResponse';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css'],
})
export class UsersPanelComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(({ usersFound }) => {
      this.users = usersFound;
    });
  }

  modificar(user: User) {
    console.log(user);
  }

  borrar(user: User) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: '¿Esta seguro que quiere borrar el usuario: ' + user.name + '?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.isConfirmed === true) {
        this.userService.deleteUser(user._id).subscribe(() => {
          this.getUsers();
          Swal.fire({
            title: 'Proyecto borrado con exito',
            icon: 'success',
          });
        });
      }
    });
  }
}
