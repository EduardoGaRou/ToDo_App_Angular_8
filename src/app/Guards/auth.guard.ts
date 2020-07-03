import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

import { LoginService } from './../Service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  
  constructor(
  	private loginService: LoginService,
  	private router: Router
  ) { }

  canLoad(
    route: Route, segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.loginService.isAuthenticated)
      this.router.navigate(['/login']);
    return this.loginService.isAuthenticated;
  } 
}
