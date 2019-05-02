import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this. do something
    this.getTasks();
   }
  // CREATE METHODS HERE
  getTasks(){
    let tempObservable = this._http.get('/tasks');

    tempObservable.subscribe(data => console.log('got our tasks', data));
  }

}
