import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** Opciones para Reescribir la Cabecera */
const
    token = 'BQDYI0HoBeGnXti8Z3HXyS4ZPGy65MPENzQzRdD2bPU7bn2R_XJkzGvG-e-uW79Dc1zv70-6cexiwZrwaKU',      // Spotify renueva el Token cada hora
    httpOptions = {
        headers: new HttpHeaders({      // Instancia para Reescribir la Cabecera
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${ token }`
        })
    };

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor( public _httpClient: HttpClient ) {
        console .log( 'SpotifyService disponible!' );
    }

    /** POST: add a new hero to the database */
    getArtists() {
        let url = 'https://api.spotify.com/v1/search?query=Metallica&type=artist&limit=20';

        /** Hace la Peticion HTTP */
        this ._httpClient
            .get( url, httpOptions )            // GET: Al URL con reescritura de cabeceras
            .subscribe( response => {           // Retorna Observable por lo que hay que subscribirse a el para obtener la data
                console .log( 'Artistas', response );
            });

    }

}
