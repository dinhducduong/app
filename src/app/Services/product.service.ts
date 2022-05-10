import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.product_api}`);
  }
  get(id: any): Observable<any> {
    return this.http.get<any>(`${environment.product_api}/${id}`);
  }
  addToCart(item: any): Observable<any> {
    return this.http.post<any>(`${environment.product_api}/addToCart`, item);
  }
  addProduct(item: any): Observable<any> {
    return this.http.post<any>(`${environment.product_api}/add`, item);
  }
  addProductDetail(item: any): Observable<any> {
    return this.http.post<any>(`${environment.product_api}/add`, item);
  }
  editProduct(item: any, id: any): Observable<any> {
    return this.http.put<any>(`${environment.product_api}/edit/${id}`, item);
  }
  remove(item: any): Observable<any> {
    return this.http.delete<any>(`${environment.product_api}/delete/${item}`);
  }
}
