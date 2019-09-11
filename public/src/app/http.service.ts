import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getTasks(){
    console.log("In service getTasks");
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getOneTask(num){
    console.log("In service getOneTask",num);
    return this._http.get('/tasks/'+ num);
  }

  constructor(private _http: HttpClient) { 
    console.log("In constructor service");
  }

}

