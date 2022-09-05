import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './components/pages/home/home-container/home-container.component';
import { HeaderComponent } from './components/pages/home/header/header/header.component';
import { FooterComponent } from './components/pages/home/footer/footer/footer.component';
import { MenuComponent } from './components/pages/home/menu/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
