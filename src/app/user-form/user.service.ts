import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userTypeCurrent: string;

  constructor(private http:HttpClient) { }

  public SaveUser(Obj: any): Observable<any>{
    return this.http.post(environment.baseUrl+'token/user',Obj);
  }

  public getUser(): Observable<any>{
    return this.http.get(environment.baseUrl+"token/getusers")
  }

  public editUser(id,Obj): Observable<any>{
    const headers = {
      "Authorization":sessionStorage.getItem('token')
    }
    return this.http.put(environment.baseUrl+'token/update/'+id,Obj,{headers});

  }

  checkUserandPass(name: string, pwd: string):Observable <any> {
    let user = {
      username:name,
      password:pwd
    }
    
    return this.http.post(environment.baseUrl+"token/generate-token",user);
  }

  public deleteUser(id): Observable<any>{
    return this.http.delete(environment.baseUrl+'token/delete/'+id);
  }

  checkUserType(){
    this.userTypeCurrent=sessionStorage.getItem("userType"); 
 }
}
