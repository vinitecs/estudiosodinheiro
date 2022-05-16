import { Component, OnInit } from '@angular/core';
import  {jogos}  from 'src/app/services/jogos';
import { faCoffee,faChevronRight ,faChevronDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[jogos]
})
export class HeaderComponent implements OnInit {

  public  listaDeDados:any;
  public filters: any;
  public showMenu = false;
  public estiloMenu:any = {display: 'none'}
  public toggle:Boolean = false;
  constructor(private country:jogos) { }
  faChevronRight =faChevronRight
  faChevronDown=faChevronDown

  public activeToggle(dado:any){
      if(dado.ACTIVE == true){
        dado.ACTIVE= false
      }else{
        dado.ACTIVE= true
      }
     
  }

  public dirChampionship(dados:any){
let obj = dados.pop()

    this.country.liga(obj.id).subscribe((dados:any)=>{})

  }
  public showDisplay(){

    return this.showMenu  = true
  }

  ngOnInit(): void {
 
    this.country.listCountry().subscribe((data:any)=>{
     this.listaDeDados = data
     let regiao:any={}
     
     this.listaDeDados.forEach((dados:any)=>{
        if(!regiao[dados.country]){
          regiao[dados.country] ={};
        }
        const region = regiao[dados.country];
        region.ACTIVE = false
        region.PAIS = dados.country
        if(!region.LIGA){
          region.LIGA =[]
        }        
       region.LIGA.push({                            
                         nome: dados.league_name,
                         temporada: dados.season,
                         league_url:`${(region.PAIS).toLowerCase()}/${((dados.league_name).split(' ').join('-')).toLowerCase()}`
                        })
      
     })

     this.filters =Object.values(regiao)



    })
  }

}
