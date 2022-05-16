import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatoComponent } from './home/campeonato/campeonato.component';
import { HomeComponent } from './home/home.component';
import { ClubsComponent } from './home/jogo/clubs/clubs.component';
import { EstatisticasJogoComponent } from './home/jogo/estatisticas-jogo/estatisticas-jogo.component';
import { JogoComponent } from './home/jogo/jogo.component';
import { JogosPrincipaisComponent } from './home/jogos-principais/jogos-principais.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  { path: "jogosPrincipais", component: JogosPrincipaisComponent },
  {
    path: "clubs/:name", component: ClubsComponent,
    children: [
      { path: ":clubs/:name", component: ClubsComponent }
    ]
  },
  {path: ':country/:name', component: EstatisticasJogoComponent},
  { path: "campeonato/:country/:camp", component: CampeonatoComponent },
  { path: '', redirectTo: '/jogosPrincipais', pathMatch: 'full' },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
