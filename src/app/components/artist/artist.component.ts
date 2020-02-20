import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
            .subscribe( params => {
                console .log( 'Params', params );
            });
    }

}
