import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductAPIResponse } from '../admin/models/ProductAPIResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<ProductAPIResponse> {
    return this.httpClient.get<ProductAPIResponse>(`${this.baseUrl}/products?page=1&limit=10`);
  }

  public getProductsByPage(page: number, limit: number): Observable<ProductAPIResponse> {
    return this.httpClient.get<ProductAPIResponse>(`${this.baseUrl}/products?page=${page}&limit=${limit}`);
  }

  public getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  public createProduct(product: Product): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/products`, product);
  }

  public deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/products/${id}`);
  }

  public updateProduct(id: string, product: Product): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/products/${id}`, product);
  }
}
