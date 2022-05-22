import { Component, Input, OnInit } from '@angular/core';
import { estatisticaTime } from 'src/app/services/estatisticas-time';
import { Time } from 'src/app/class/time';
import { Router } from '@angular/router';
import  {jogos}  from 'src/app/services/jogos';
import { Paises } from 'src/app/interfaces/Paises';
import { Season } from 'src/app/interfaces/Season';



@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers:[estatisticaTime,Time,jogos]
})
export class ClubsComponent implements OnInit {
public listPaises:any;
public resultado:any
public objcA:string ='eses'
public listCamps:any
constructor(public time:estatisticaTime ,public route:Router,public timeSelecionado:Time,public country:jogos) { 

  let timeId =  localStorage.getItem('timeId')

  this.country.listCountry().subscribe((country:any)=>{
    this.listPaises = country

    this.time.statusTime(timeId).subscribe((data:any)=>{
      this.timeData = data.data 
      let auxData:any= {}
      this.timeData.forEach((data:any)=>{
        const pais:any =  this.obterFiltro(data.competition_id)
        data['campeonato'] =  pais.league_name    
      
        if(!auxData[data.season]){
        auxData[data.season] = {}
      }
      const seasons =auxData[data.season]
      seasons.TEMPORADA = data.season
   
      if(!seasons.CAMPEONATOS){
        seasons.CAMPEONATOS = []
      }
      seasons.CAMPEONATOS.push(data)
    })
    this.resultado = Object.values(auxData)

    })
  })

}

public timeData:any;
public timePrincipal:any;
public objCampeonatoObj:any;
public selectedValue:any;

public tabela_campeonato:any

 obterFiltro(id:string){
  let selecionado;        
  this.listPaises.forEach((data: Paises, index: number) => {
   if (data.season.filter((subFilter: Season) => { return subFilter.id == parseInt(id) })[0]) {
     selecionado = data
   }
 })

 return selecionado
}
public listaDeLig:any
public dataTime:any;
seleCamp(camp:any){
    this.listCamps = this.resultado.filter((data:any)=>{      
        return data.TEMPORADA == camp      
    }) 

   this.listaDeLig =  this.listCamps[0].CAMPEONATOS.map((data:any)=>{return data}) 
}
selectCamp(data:any){  
 this.dataTime = data
  this.time.tableChampionship(data.competition_id).subscribe((data:any)=>{    
    this.tabela_campeonato = data
  })
}

  ngOnInit() {
    
    setTimeout(()=>{    
      this.objcA = this.resultado[0].TEMPORADA  
      this.listaDeLig = this.resultado[0].CAMPEONATOS
      this.timePrincipal = this.timeData[0]  
      console.log("asdmnjkashdhjkashdkjsh",this.timePrincipal)

    },2000)


    

  }

}
