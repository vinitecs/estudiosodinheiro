import { Component, OnInit,OnChanges, DoCheck } from '@angular/core';
import { jogos } from 'src/app/services/jogos';
import { listaJogos } from 'src/app/interfaces/listajogos';
import { Router } from '@angular/router';
import { Time } from 'src/app/class/time';



@Component({
  selector: 'app-jogos-principais',
  templateUrl: './jogos-principais.component.html',
  styleUrls: ['./jogos-principais.component.css'],
  providers :[jogos,listaJogos,Time]
})
export class JogosPrincipaisComponent implements OnInit,DoCheck {
  public test:any
  

  constructor(public jogo: jogos,public list:listaJogos,public route:Router,public getTime:Time) {   
    this.jogo.listCountry().subscribe((pais) => {      
      this.jogo.jogos(pais).subscribe((dados: any) => {
      this.test = dados;   
      }, (err) => {
        console.log(err);
      });
    });
  
  }
public selectDayJogo(row:any){}
public labelSem:Array<String>=['Dom','Seg','Ter','Qua','Qui','Sex','Sab']
public labelMeses :Array<string>=['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV',"DEZ"]
public objRes:any ={} 
public listaDeJogos:any;

ngDoCheck():void{

}

public  istStyles(data:any){
  let dado:any={"background-color":"#e8e9ed","border-bottom":"1px solid rgb(215 215 215)"}
  let color:any ={"background-color":"white",    "border-bottom":"1px solid rgb(215 215 215)"} 
  return data % 2 == 1 ? dado: color
}
public listDate:Array<any> =[]
public winPotential(params:any) {
  if(params <= 1){  
    return {"background-color":"#c85f46"}
  }else if(params >1.50){
 
    return {"background-color":"#239954"} 
  }
  else if (params >=1){
  
    return {"background-color":"#e5b05e"}  
  }else{
    return {"background-color":"black"}
  }
}
public setCampeonato(param1:string,param2:string){  
  this.route.navigate([`${param1}/${param2}`])
}
public setTime(obj:any,rotas:string){

 
 localStorage.setItem("timeId",obj.awayID)
   this.getTime.setTime(obj)
   this.route.navigateByUrl(rotas,obj)
   
}

 async ngOnInit() {
  function dateToString(d:any,sem:any,mes:any) {
   
    return {
            label: [sem,mes, d.getDate() ].map(d => !isNaN(d)? (d > 9 ? d : '0' + d):d).join('-'),
            date:  [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(d => d > 9 ? d : '0' + d).join('-')
            };
  }
  
  var hoje = new Date();
  var ano = hoje.getFullYear();
  var mes = hoje.getMonth();
  var dia = hoje.getDate();

  for (var i = -2; i < 5; i++) {
    var outroDia = new Date(ano, mes, dia + i);
    let sem  =   this.labelSem[outroDia.getDay()]
    let mese = this.labelMeses[outroDia.getMonth() +1]
  
    this.listDate.push(Object.assign({},dateToString(outroDia,sem,mese)));

  }

setTimeout(()=>{

  this.test.forEach((dados:any)=>{    

    if(!this.objRes[dados["CAMPEONATO"]]){
      this.objRes[dados["CAMPEONATO"]] ={}
    }
    const campeonato = this.objRes[dados["CAMPEONATO"]]
    campeonato.PAIS = dados.PAIS 
    campeonato.NOME = dados["CAMPEONATO"]
   
    campeonato.league_url = `${(dados.PAIS).toLowerCase()}/${((dados["CAMPEONATO"]).split(' ').join('-')).toLowerCase()}`
    if(!campeonato.JOGOS){
      campeonato.JOGOS =[]
    }
    campeonato.JOGOS.push(dados)

  })
  this.listaDeJogos = Object.values(this.objRes)


},3000)


  }
  
  
 

  
}
