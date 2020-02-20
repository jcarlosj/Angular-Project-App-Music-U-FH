import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

    artists : any[] = [];

    constructor( public _httpClient: HttpClient ) {
        console .log( 'SpotifyService disponible!' );
    }

    /** POST: add a new hero to the database */
    getArtists() {
        let url = 'https://api.spotify.com/v1/search?query=Metallica&type=artist&limit=20';

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

}
