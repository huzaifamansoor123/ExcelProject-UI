import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http: HttpClient) {}

  savedata(data): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/data/', data);
  }

  getdata(): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/data/');
  }

  getdatabyid(id): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/doctor/' + id);
  }

  deletedatabyid(id): Observable<any> {
    return this.http.delete(environment.baseUrl + 'api/data/' + id);
  }

  updatedatabyid(id): Observable<any> {
    return this.http.post(environment.baseUrl + 'api/data/' + id, id);
  }
}
