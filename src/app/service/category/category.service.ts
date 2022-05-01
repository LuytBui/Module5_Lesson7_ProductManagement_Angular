import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Category} from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`${this.API_URL}/categories`);
  }

}
