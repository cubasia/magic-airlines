import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/pages/home/menu/home/menu.component'
import { ResultsComponent } from './components/pages/results/results.component';
const routes: Routes = [
  { path: 'home', component: MenuComponent },
  { title:"Risultato",path: 'results', component: ResultsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
