import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtResponse} from '../../model/auth/jwtResponse';
import {Router} from '@angular/router';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<JwtResponse>;
  public currentUser: Observable<JwtResponse>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<JwtResponse>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user) {
    this.http.post(`${API_URL}/login`, user).subscribe(
      (response) => {
        sessionStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
        this.router.navigateByUrl('/products');
      }
    );
  }

  logout() {
    sessionStorage.setItem('currentUser', null);
    this.currentUserSubject.next(null);
  }

  getCurrentUserValue() {
    return this.currentUserSubject.value;
  }
}
