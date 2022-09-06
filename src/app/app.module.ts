import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './components/pages/home/home-container/home-container.component';
import { HeaderComponent } from './components/pages/home/header/header/header.component';
import { FooterComponent } from './components/pages/home/footer/footer/footer.component';
import { MenuComponent } from './components/pages/home/menu/home/menu.component';
import { ContactComponent } from './components/pages/home/contact/contact.component';
import {DynamicDateInputDirective} from './directives/DynamycDateInputDirective'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    DynamicDateInputDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
