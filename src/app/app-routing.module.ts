import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ajouter', component: AddPlayerComponent},
  {path: 'player/:id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
