import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SecondSessionTitleComponent } from './components/second-session-title/second-session-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { CarrouselTattoComponent } from './components/carrousel-tatto/carrousel-tatto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    SecondSessionTitleComponent,
    FooterComponent,
    LocalizacaoComponent,
    CarrouselTattoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
