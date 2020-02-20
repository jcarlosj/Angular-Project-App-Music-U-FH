import { Component } from '@angular/core';
/** Services */
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    searchTerm : string = '';

    constructor( public _spotifyService: SpotifyService ) {

    }

    searchArtist() {
        console .log( this .searchTerm );

        if( this .searchTerm .length == 0 ) {
            return;
        }

        /** Conecta con el Service para realizar una petición  */
        this ._spotifyService .getArtists( this .searchTerm )       // Obtiene el Observable del Service
            .subscribe( response => {             // Se subscribirse a el para obtener la data (Se recomienda solo usar en el subscribe lógica específica del componente)
                console .group( 'Search' );
                console .log( 'Artistas', response );
                console .groupEnd();
            });

    }

}
