import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  

  constructor(private http:HttpClient) { }

  url="http://localhost:3000";

  postdetails(data){
    return this.http.post(`${this.url}/CreateDetails`,data);
  }
}
