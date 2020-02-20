import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
/** Services */
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    artist : any = {};

    constructor(
        private _activatedRoute: ActivatedRoute,
        public _spotifyService: SpotifyService
    ) { }

    ngOnInit() {
        /** Obtiene parametros enviados a traves de la URL usando el metodo GET */
        this ._activatedRoute .params
            .pipe(
                map( params => params[ 'id' ]  )       // map: para extraer solo el parametro deseado
            )
            .subscribe( id => {
                console .log( 'Artist_ID', id );
                this ._spotifyService .getArtistById( id ) .subscribe( artist => {
                    this .artist = artist;
                    console .log( 'Artista', this .artist );
                });
            });
    }

}
