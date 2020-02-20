import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

    constructor( private _activatedRoute: ActivatedRoute ) { }

    ngOnInit() {
        /** Obtiene parametros enviados a traves de la URL usando el metodo GET */
        this ._activatedRoute .params
            .pipe(
                map( params => params[ 'id' ]  )       // map: para extraer solo el parametro deseado
            )
            .subscribe( id => {
                console .log( 'Artist_ID', id );
            });
    }

}
