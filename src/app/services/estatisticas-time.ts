import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { REST_API,key } from "./API";
import { Observable,map,pipe } from "rxjs";

@Injectable(
    {providedIn:'root'}
)
export class  estatisticaTime{
    constructor(private http:HttpClient){}
    
     statusTime(id_team:any):Observable<any>{
        return  this.http.get(`${REST_API}team?key=${key}&team_id=${id_team}`).pipe(map((data:any)=>{
                return data
         }))
     }
     team(id_team:any):Observable<any>{
        return  this.http.get(`${REST_API}lastx?key=${key}&team_id=${id_team}&last_x_match_num=2`).pipe(map((data:any)=>{
                return data
         }))
     }


     tableChampionship(id_season:any):Observable<any>{
        return  this.http.get(`${REST_API}league-tables?key=${key}&season_id=${id_season}`).pipe(map((data:any)=>{
                return data
         }))
     }

    
}