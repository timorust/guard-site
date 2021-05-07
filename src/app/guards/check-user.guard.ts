import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUserGuard implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('this check the guard');
    console.log('guard state', state);
    console.log('guard route', route);

    // localStorage.setItem('url', window.location.pathname);
    if(localStorage.getItem('user')) {
      // return localStorage.getItem('user') !== null;
      return true
    }
    else
    {
      return this.router.createUrlTree(['404']);
    }
  }
}
