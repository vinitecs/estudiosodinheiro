import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from "rxjs";
import { REST_API,key } from './API';

@Injectable(
    { providedIn: 'root' }
)

export class  statusPartida{
    constructor(public http:HttpClient){ }
     estatisticasPartida(macthId:number): Observable<any>{
        return this.http.get(`${REST_API}match?key=${key}&match_id=${macthId}`).pipe(map((data:any)=>{
            return data
        }))
      }
}
