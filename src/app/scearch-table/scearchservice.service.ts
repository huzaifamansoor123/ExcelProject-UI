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

  public getActive(): Observable<any> {
    return this.http.get(environment.baseUrl + "api/data/active");
  }
  public deletedata(id:any,userType:any):Observable<any>{
    if(userType=="ADMIN"){
      return this.http.delete(environment.baseUrl + "api/data/" + id)
    }
    else{
      return this.http.delete(environment.baseUrl + "api/data/user/" + id)
    }
   
  }

  public reActive(id):Observable<any>{
    return this.http.delete(environment.baseUrl + "api/data/reactive/" + id)
  }

  public getdataById(id):Observable<any>{
    return this.http.get(environment.baseUrl+"api/data/"+id)
  }

  public updatedataById(id,obj):Observable<any>{
    return this.http.put(environment.baseUrl+"api/data/"+id,obj);
  }

}
