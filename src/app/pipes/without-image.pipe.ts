import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutImage'
})
export class WithoutImagePipe implements PipeTransform {

    transform( images: any[], ...args: any[]): any {
        let noImage = './assets/images/no-image.gif';

        /** Valida si existe un Array de imágenes */
        if( ! images ) {
            return noImage;
        }

        return ( images .length > 0 ? images[ 1 ] .url : noImage );
    }

}
