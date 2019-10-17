import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public SaveUser(Obj: any): Observable<any>{
    return this.http.post(environment.baseUrl+'token/user',Obj);
  }

  public getUser(): Observable<any>{
    return this.http.get(environment.baseUrl+"token/getusers")
  }

  public editUser(id,Obj): Observable<any>{
    return this.http.put(environment.baseUrl+'token/update/'+id,Obj);
  }

  public deleteUser(id): Observable<any>{
    return this.http.get(environment.baseUrl+'token/delete'+id);
  }
}
