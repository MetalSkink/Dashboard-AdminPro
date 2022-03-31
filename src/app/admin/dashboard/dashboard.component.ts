import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.tokenService.logout();
    this.router.navigate(['/']);
  }


}
