import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`${this.API_URL}/products`);
  }

  createProduct(product: FormData): Observable<Product> {
    return this.http.post(`${this.API_URL}/products`, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get(`${this.API_URL}/products/${id}`);
  }

  updateProduct(id: number, product: FormData): Observable<Product> {
    return this.http.post(`${this.API_URL}/products/${id}/edit`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(`${this.API_URL}/products/${id}`);
  }
}
