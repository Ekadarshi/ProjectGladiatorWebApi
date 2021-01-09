import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable,of} from 'rxjs';
import { IData } from './../model/idata';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url='http://localhost/project/api/dashboard/';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  getDataList():Observable<IData[]>{
    return this.http.get<IData[]>(this.url+"DashBoard")
  }
}
