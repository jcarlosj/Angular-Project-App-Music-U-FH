import { RouterModule, Routes } from '@angular/router';

/** Components */
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule .forRoot( APP_ROUTES, { useHash: true } );
/** useHash: Facilita el enrutamiento cuando se requiere hacer configuraciones en el servidor, obviándolas (Ejemplo: Apache .htaccess, NodeServer) */
