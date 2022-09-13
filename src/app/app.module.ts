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
import {HttpClientModule} from '@angular/common/http';
import { ResultsComponent } from './components/pages/results/results.component';
import { DetailsComponent } from './components/pages/results/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    DynamicDateInputDirective,
    ResultsComponent,
    DetailsComponent,
  ],
  imports: [
    HttpClientModule,BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
