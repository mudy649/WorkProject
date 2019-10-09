import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  


  constructor(private http: HttpClient) {
    console.log("service")
   }
  
   getdata():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getassets():Observable<any>{
    return this.http.get('assets/articlebasic.json');
  }
}
