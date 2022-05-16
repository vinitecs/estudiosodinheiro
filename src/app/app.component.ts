import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudiosodinheiro';
  constructor(public http:HttpClient){}
public key: String ="test85g57"
public REST_API : String = "https://api.football-data-api.com/"
  ngOnInit(){
   //this.getInicio()
    //this.jogos()
    //this.listPaises()
    this.estatisticasPartida()
     //  this.jogosHoje()
    //this.listaLigasPadroes()
     //this.getBtss();
     //this.tempLeagues();
     //this.leageSeason()

  }
  public listPaises(){
    return this.http.get(`${this.REST_API}country-list?key=${this.key}`).subscribe((resultado:any) =>{
      

     let dados =resultado.forEach((dados:any)=>{ if( dados.country =="México"){


     }})

    })
  }

  public estatisticasPartida(){    
    return this.http.get(`${this.REST_API}match?key=${this.key}&match_id=${579362}`)
    .subscribe(resultado => console.log("Estatisticas da partida",resultado))
  }
  public getInicio(){
  return this.http.get( `${this.REST_API}league-list?key=${this.key}`).subscribe((resultado:any) =>
   console.log( "inglaterra",resultado.data.filter((filt:any)=>{ return filt.country == "Mexico"})))
  }
 public listaLigasPadroes(){
  return this.http.get(`${this.REST_API}league-list?key=${this.key}&chosen_leagues_only=true`
   ).subscribe(resultado => console.log(resultado))
 }
  public jogos(){
    return this.http.get(`${this.REST_API}todays-matches?key=${this.key}`,
    {responseType: 'text',}).subscribe(resultado => console.log(JSON.parse(resultado)))
  }
  public tabelaCampeonato(){
    return this.http.get(`${this.REST_API}league-tables?key=${this.key}&season_id=6211`,{responseType: "text"})
    .subscribe((resultado)=>{
      console.log("futebol espanhoul", JSON.parse(resultado))    
    })
}
public jogosHoje(){
  return this.http.get(`${this.REST_API}todays-matches?key=${this.key}&timezone=America/Sao_Paulo&data=2022-04-04`,{responseType: "text"}).subscribe((resultado)=>{
    console.log("partida de hoje", JSON.parse(resultado))
  
  })
}
public estatisticasPartidaSelecionada(){
  return this.http.get(`${this.REST_API}match?key=${this.key}&match_id=1747639`,{responseType: "text"})
  .subscribe((resultado)=>{
    console.log("estatisticas da partida", JSON.parse(resultado))
  
  })
    
  }


public tempLeagues(){

  return   this.http.get(`${this.REST_API}league-teams?key=${this.key}&season_id=1`,{responseType: "text"})
    .subscribe((resultado)=>{
      console.log("Templeages", JSON.parse(resultado))
  })
}
public leageSeason(){
  return this.http.get(`${this.REST_API}/league-season?key=${this.key}&season_id=6038`)
  .subscribe((resultado)=>{
    console.log("liga selecionada", resultado)
})
}
}
