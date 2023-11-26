import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanMatch {
  constructor(
    private authService:AuthService,
    private router: Router,
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean>{
    return this.authService.checkAutentication()
    .pipe(
      tap( isAuthenticated => {
        if(!isAuthenticated) this.router.navigate(['./auth/login'])
      })
    )

  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {

    // console.log('Can Match');
    // console.log({route, segments});
    // return false;

    return this.checkAuthStatus();

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {

  //   console.log('Can Activate');
  //   console.log({route, state});
  //   return false; // o false, dependiendo de tu lógica

  return this.checkAuthStatus();

  }

}
