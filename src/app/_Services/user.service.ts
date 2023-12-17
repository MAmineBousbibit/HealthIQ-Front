import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 /***URL de RestAPI de Login USER  */
  Path_SERVER="http://localhost:8080/api/v1/auth/";
  requestHeader=new HttpHeaders(
    { "No-Auth":"True"}  
  );

  isAuthenticated:boolean =false;
  role:any;
  email:any;
  userID:any;
  token!:string;
  constructor(private httpclient:HttpClient) { }
  
/**Fonction de Register  ******/
  public Register(USER:any){
    return this.httpclient.post(this.Path_SERVER+'register',USER,{
      headers:this.requestHeader
    });
  }

  /**Fonction de Login  ******/
  public Login(USER:any){
    return this.httpclient.post(this.Path_SERVER+'authenticate',USER,{
      headers:this.requestHeader
    });
  }


}