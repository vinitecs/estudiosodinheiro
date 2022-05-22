import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DetalhesTimeComponent } from './detalhes-time/detalhes-time.component';

@Component({
  selector: 'app-club-submenu',
  templateUrl: './club-submenu.component.html',
  styleUrls: ['./club-submenu.component.css'],
})
export class ClubSubmenuComponent implements OnInit,AfterViewInit  {

  constructor() { }
  public auxStyle:any ='Estatisticas'
  public obj:any ={'background-color':'white','color':'#060c19'}
  public tabela_campeonat:any
  @Input() 
  set tabela_campeonato(tabela_campeonato:any){
    this.tabela_campeonat = tabela_campeonato
  }
  public dados_time:any
  @Input()
  set dataTime(data:any){
    this.dados_time = data
  }
  @ViewChild('detalhesTime')  detail:DetalhesTimeComponent;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // child is set
  }

public detalhesPartidaLabel=[
    {
      label:'Estatisticas',
      function: (data:any)=>{
        this.auxStyle = data
        this.detail.onToggle()
      }
    },
    {
      label:'Jogos E resultados',
      function: (data:any)=>{
        this.auxStyle = data
        this.detail.offToggle()
      }
    },
    {
      label:'Jogadores',
      function: (data:any)=>{
        this.auxStyle = data;  
        this.detail.offToggle() 
      }
    },
    {
      label:'Tabelas',
      function: (data:any)=>{
        this.auxStyle  =data;
        this.detail.offToggle()  
      }
    },
]

    styles(btn:any){
      if(btn.label == this.auxStyle){
        return this.obj
      }
    }
}