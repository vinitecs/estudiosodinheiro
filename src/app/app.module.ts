import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CampeonatoComponent } from './home/campeonato/campeonato.component';
import { JogoComponent } from './home/jogo/jogo.component';
import { JogosPrincipaisComponent } from './home/jogos-principais/jogos-principais.component';
import { TabelaCampeonatoComponent } from './home/jogo/tabela-campeonato/tabela-campeonato.component';
import { EstatisticasJogoComponent } from './home/jogo/estatisticas-jogo/estatisticas-jogo.component';
import { CabecalhoTimesComponent } from './home/jogo/cabecalho-times/cabecalho-times.component';
import { HeaderComponent } from './home/header/header.component';
import { MenuDashboardComponent } from './home/jogos-principais/menu-dashboard/menu-dashboard.component';
import { TableJogosComponent } from './table-jogos/table-jogos.component';
import { ClubsComponent } from './home/jogo/clubs/clubs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ClubSubmenuComponent } from './home/jogo/clubs/club-submenu/club-submenu.component';
import { DetalhesTimeComponent } from './home/jogo/clubs/club-submenu/detalhes-time/detalhes-time.component';
import { TabelaComponent } from './home/jogo/clubs/club-submenu/detalhes-time/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CampeonatoComponent,
    JogoComponent,
    JogosPrincipaisComponent,
    TabelaCampeonatoComponent,
    EstatisticasJogoComponent,
    CabecalhoTimesComponent,
    HeaderComponent,
    MenuDashboardComponent,
    TableJogosComponent,
    ClubsComponent,
    ClubSubmenuComponent,
    DetalhesTimeComponent,
  
    TabelaComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
