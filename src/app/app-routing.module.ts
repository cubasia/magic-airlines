import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/pages/home/menu/home/menu.component'
import { FooterComponent } from './components/pages/home/footer/footer/footer.component'
const routes: Routes = [
  { path: 'home', component: MenuComponent },
  { path: 'course', component: FooterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
