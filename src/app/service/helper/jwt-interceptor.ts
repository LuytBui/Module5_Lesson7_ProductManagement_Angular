import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../auth/authentication.service';
import {Observable} from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.getCurrentUserValue();
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: currentUser.token
        }
      });
    }
    return next.handle(request);
  }


}
