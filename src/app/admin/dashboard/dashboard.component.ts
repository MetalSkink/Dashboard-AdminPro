import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string = '';
  isAdmin: boolean = false;
  isModerator: boolean = false;

  roles:string[] = [];

  constructor(private router:Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.userName = this.tokenService.getUserName() || '';
    this.roles = this.tokenService.getAuthorities() || [];
    this.roles.forEach(role => {
      if (role === "admin") {
        this.isAdmin = true;
      } else if (role === "moderator") {
        this.isModerator = true;
      }
    });
  }

  signOut(){
    this.tokenService.logout();
    this.router.navigate(['/']);
  }


}
