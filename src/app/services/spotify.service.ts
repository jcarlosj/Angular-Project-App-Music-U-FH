import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor( public _httpClient: HttpClient ) {
        console .log( 'SpotifyService disponible!' );
    }

    getArtists() {
        let url = 'https://api.spotify.com/v1/search?query=Metallica&type=artist&limit=20';

        this ._httpClient .get( url )      // Retorna un Observable, por lo que hay que subscribirse
            .subscribe( response => {
                console .log( response ); 
            });

    }

}
