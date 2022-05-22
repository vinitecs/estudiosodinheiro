import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-detalhes-time',
  templateUrl: './detalhes-time.component.html',
  styleUrls: ['./detalhes-time.component.css']
  
})
export class DetalhesTimeComponent implements OnInit {

  constructor() {
    
  }
  public tabela_campeonato:any;
public data_time:any
  ngOnInit() {}
  @Input()
  set tabela_campeonat(tabela_campeonat:any){
  this.tabela_campeonato = tabela_campeonat
  }
  @Input() 
  set dados_time(dados_time:any){
      this.data_time =dados_time
  }
  public isVisible:boolean = true;
  public styleBtn:any= "Tudo";
  public listBtn:any = [
    {
      label:"Tudo",
      method: (data:any)=>{
        this.styleBtn = data;
     
      }
    },
    {
      label:"Metas",
      method: (data:any)=>{
        this.styleBtn = data;
      }
    },
    {
      label:"Cantos",
      method: (data:any)=>{
        this.styleBtn = data;
      }
    },
    {
      label:"Cartas",
      method: (data:any)=>{
        this.styleBtn = data;
      }
    },
    {
      label:"Metade",
      method: (data:any)=>{
        this.styleBtn = data;
      }
    },
    {
      label:"Jogadoras",
      method: (data:any)=>{
        this.styleBtn = data;
      }
    },
  ]
  onToggle(){ 
    this.isVisible = true
  }
  offToggle(){
    this.isVisible = false
  }

  styles(style:any){
    if(this.styleBtn == style){
      return {"color":"rgb(15, 67, 219)","background-color":"rgb(15 67 219 / 27%)"}
    }else{
      return null
    }
  }
}
