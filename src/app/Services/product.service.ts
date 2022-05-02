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
  post(item: any): Observable<any> {
    return this.http.post<any>(`${environment.product_api}/post`, item);
  }
}
