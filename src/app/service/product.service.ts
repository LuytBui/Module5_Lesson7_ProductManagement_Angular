import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.API_URL}/products`);
  }
}
