import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";
import { key,REST_API } from "./API";
import { HttpResponse } from "@angular/common/http";
import { Paises } from "../interfaces/Paises";
import { Season } from "../interfaces/Season";



@Injectable(
    { providedIn: 'root' }
)
export class jogos{ 

    constructor(public http:HttpClient){
      
    }
     listPaises:Array<Paises>

     public response:any;

     async fetchData() {
      return  await this.http
      .get<any>(`${REST_API}todays-matches?key=${key}&date=2022-04-23`)
      .pipe(delay(1000))
      .toPromise();
    }
    
    public  jogos(listPaises:any):Observable<any>{
      let resultado :any  
      return  this.http.get(`${REST_API}todays-matches?key=${key}&date=2022-05-22`)
        .pipe(map((dados:any)=>{
          resultado =  dados.data
          resultado.forEach((data:any)=>{


            let result:any =  obterFiltro(data.competition_id)
            let urlCampeonato = result.name.split(' ').join('-').toLowerCase()           
                data["PAIS"] = result.country
                data["CAMPEONATO"] = result.league_name
                data['league_url'] =  (result.country).toLowerCase() +'/'+urlCampeonato
          })


           function obterFiltro(id:string){
            let selecionado;        
            listPaises.forEach((data: Paises, index: number) => {
             if (data.season.filter((subFilter: Season) => { return subFilter.id == parseInt(id) })[0]) {
               selecionado = data
             }
           })
           return selecionado
          }
      
          return resultado
        }))   
        
    }
    public  listCountry():Observable<any>{
      return   this.http.get(`${REST_API}league-list?key=${key}`).pipe(map((result: any) => {
       return result.data 
     
    
      }))        
 }


    
      
  public getBtss():Observable<any>{ 
    return this.http.get(`${REST_API}stats-data-btts?key=${key}`).pipe(map((result: any) => {

      return result.data 
    
   
     }))


}

public liga(id:number):Observable<any>{ 
  return this.http.get(`${REST_API}league-season?key=${key}&season_id=4912`).pipe(map((result: any) => {
      return result 
     }))

}
  
   

}

