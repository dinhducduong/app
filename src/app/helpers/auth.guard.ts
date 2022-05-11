import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): boolean {
    const loggedInUsers = JSON.parse(localStorage.getItem('user') || "{}");
    if (loggedInUsers.email == undefined || loggedInUsers.email == "") {
      this.router.navigate(['/login']);
      return false;
    }
    return true
  }

}
