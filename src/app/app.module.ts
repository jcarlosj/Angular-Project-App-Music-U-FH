import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/** Routes */
import { APP_ROUTING } from './app.routes';
/** Services */
import { SpotifyService } from './services/spotify.service';
/** Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
