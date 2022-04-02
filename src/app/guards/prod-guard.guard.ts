import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProdGuardGuard implements CanActivate, CanLoad {

  realRole: string = '';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole = route.data['expectedRole'];
      const roles = this.tokenService.getAuthorities();
      this.realRole = 'user';

      roles.forEach(rol => {
        if (rol === "moderator") {
          this.realRole = 'moderator';
        }else if (rol === "admin") {
          this.realRole = 'admin';
        }
      });
      if (!this.tokenService.getToken() || expectedRole.indexOf(this.realRole) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
