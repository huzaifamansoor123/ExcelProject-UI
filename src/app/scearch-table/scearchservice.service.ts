import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScearchserviceService {

  constructor(private http:HttpClient) { }
  public search(searchObj: any):Observable<any>{
    return this.http.post(environment.baseUrl+ 'api/search/data',searchObj);
  }
}
