import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

/** Opciones para Reescribir la Cabecera */
const
    token = 'BQC1jpS0wm47IV27hOqdIehu3RMHSwXDYUkG4cVx3q0AbF7seStF0L6iiMYmIsZs7gEWm-lX55I0wSiD7GI',      // Spotify renueva el Token cada hora
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

    artists : any[] = [];
    urlSpotify : string = 'https://api.spotify.com/v1/';

    constructor( public _httpClient: HttpClient ) {
        console .log( 'SpotifyService disponible!' );
    }

    /** GET: Obtiene el listado de Artistas */
    getArtists( artist: string ) {
        let url = `${ this .urlSpotify }search?query=${ artist }&type=artist&limit=20`;

        /** Hace la Peticion HTTP */
        return this ._httpClient
            .get( url, httpOptions )    // Retorna Observable de petición GET: Al URL con reescritura de cabeceras
            .pipe(                      // RXJS: pipe operador que permite combinar múltiples funciones que se pasan comop parametro. Retorna una nueva funcion que ejecuta las funciones compuestas en secuencia
                // RXJS: map operator funciona exactamente igual para Observables que para arrays.
                map( ( response : any ) => {        // Logica adicional para recorrer la data específica de estructura del Objeto JSON que deseamos (Opcional)
                    this .artists = response .artists .items;
                    return this .artists;
                })
            );

    }

    /** GET> Obtiene un Artista por ID */
    getArtistById( id: string ) {
        let url = `${ this .urlSpotify }artists/${ id }`;

        /** Hace la Peticion HTTP */
        return this ._httpClient
            .get( url, httpOptions );    // Retorna Observable de petición GET: Al URL con reescritura de cabeceras

    }

    getArtistsTopTracks( id: string ) {
        let url = `${ this .urlSpotify }artists/${ id }/top-tracks?country=us`;

        return this ._httpClient
            .get( url, httpOptions );   // Retorna Observable de petición GET: Al URL con reescritura de cabeceras
    }

}
