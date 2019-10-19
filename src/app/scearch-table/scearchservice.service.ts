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
    
  public getalldata():Observable<any>{
    return this.http.get(environment.baseUrl+"api/data/");
  }
  public deletedata(id):Observable<any>{
    return this.http.delete(environment.baseUrl+"api/data/"+id)
  }

  public getdataById(id):Observable<any>{
    return this.http.get(environment.baseUrl+"api/data/"+id)
  }

  public updatedataById(id,obj):Observable<any>{
    return this.http.put(environment.baseUrl+"api/data/"+id,obj);
  }

}
