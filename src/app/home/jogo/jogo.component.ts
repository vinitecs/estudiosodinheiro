import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  constructor() { }
public func = "funcional"
  ngOnInit(): void {
  }
  @Input('listaDeDados')
  set listaDeDados(listaDedados:any){
      console.log("listaDedados",listaDedados)
  }

}
