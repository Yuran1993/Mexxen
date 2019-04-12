import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PlayersComponent } from "./players/players.component";
import { MainComponent } from "./dobbelstenen/main.component";

const routes: Routes = [
  {path: 'players', component: PlayersComponent},
  {path: 'game', component: MainComponent},
  {path: '', redirectTo: '/players', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
