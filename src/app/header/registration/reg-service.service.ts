import { Injectable } from '@angular/core';
import {   HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

 constructor(private http:HttpClient) {

}


getData(){
return this.http.get("http://localhost:3000/posts")
}

addData(dt:any){
 return this.http.post("http://localhost:3000/posts",dt)
    }
}
