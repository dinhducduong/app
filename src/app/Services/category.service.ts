import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.category_api}`);
  }
  addCategory(item: any): Observable<any> {
    return this.http.post<any>(`${environment.category_api}/add`, item);
  }
  editCategory(id: any, item: any): Observable<any> {
    return this.http.put<any>(`${environment.category_api}/edit/${id}`, item);
  }
  remove(item: any): Observable<any> {
    return this.http.delete<any>(`${environment.category_api}/delete/${item}`);
  }
}
