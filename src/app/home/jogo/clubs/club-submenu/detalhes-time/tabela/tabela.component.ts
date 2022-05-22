import { Component, Input, OnInit } from '@angular/core';
import { CampeonatoComponent } from 'src/app/home/campeonato/campeonato.component';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor() { }
  public tabela:any;
  public timeSelecionado:any
  @Input() 
  set data_time(data_time:any){
    this.timeSelecionado = data_time
    console.log("asdasdhashdjkashjkdhkasjhdkahsdkkhasdhjkashdk",this.timeSelecionado)
  }
@Input()
set tabela_campeonato(tabela_campeonato:any){
  console.log(tabela_campeonato.data)
    this.tabela =tabela_campeonato.data.all_matches_table_overall
    
    this.tabela.forEach((element:any) => {
      element.perc_wins =  ((100 /element['matchesPlayed']) * element['seasonWins_overall']).toFixed(0)  + '%'
      element.goals_conceded = element.seasonConceded_away + element.seasonConceded_home;
      element.avg = ((element.seasonGoals + element.goals_conceded) / element.matchesPlayed).toFixed(2)
    });
}
defineStyle(data:any,obj:any):any{
  if(data == "cleanName"){
    return {"text-align":"start"}
  }

}
public label_tabela:any=[
  {
    id:"position",
    label:' ' 
  },
  {
    id: 'cleanName',
    label:'time'

  },
  {
    id:'matchesPlayed',
    label:'MP'
  },
  {
    id:'perc_wins',
    label:'win'
  },
  {
    id:'seasonGoals',
    label:'GF'
  },
  {
    id:'goals_conceded',
    label:'GA'
  },
  {
    id:'seasonGoalDifference',
    label:'GD'
  },
  {
    id:'points',
    label:'pts'
  },
  {
    id: "avg",
    label:"AVG"
  }
]
  ngOnInit(): void {
  }

}
