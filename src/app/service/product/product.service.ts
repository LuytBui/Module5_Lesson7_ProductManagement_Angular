import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`${API_URL}/products`);
  }

  createProduct(product: FormData): Observable<Product> {
    return this.http.post(`${API_URL}/products`, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get(`${API_URL}/products/${id}`);
  }

  updateProduct(id: number, product: FormData): Observable<Product> {
    return this.http.post(`${API_URL}/products/${id}/edit`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(`${API_URL}/products/${id}`);
  }
}
