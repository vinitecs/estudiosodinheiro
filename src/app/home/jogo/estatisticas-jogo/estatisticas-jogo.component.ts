import { Component, OnInit } from '@angular/core';
import { statusPartida } from 'src/app/services/detalhesPatidaH2H';


@Component({
  selector: 'app-estatisticas-jogo',
  templateUrl: './estatisticas-jogo.component.html',
  styleUrls: ['./estatisticas-jogo.component.css'],
  providers:[statusPartida]
})
export class EstatisticasJogoComponent implements OnInit {

  constructor(private status: statusPartida) { }

  ngOnInit(): void {

  
  }

}
